import React from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import GET_ITEMS from "./gql/query/getItems";
import DELETE_ITEM from "./gql/mutation/deleteItem";

import CreateItem from "./CreateItem";

import { ListGroup, ListGroupItem, Button } from "reactstrap";

const TodoList = () => {
  const { loading, data } = useQuery(GET_ITEMS);
  const [deleteItem] = useMutation(DELETE_ITEM);

  if (loading) return <div>loading...</div>;

  return (
    <ListGroup style={{ width: 700, height: 500, overflow: "auto" }}>
      <ListGroupItem>
        <CreateItem />
      </ListGroupItem>
      {data.items.map((item) => {
        return (
          <ListGroupItem>
            <div className="d-flex">
              {item.title}
              <Button
                color="danger"
                onClick={() => {
                  deleteItem({
                    variables: {
                      id: item.id,
                    },
                    awaitRefetchQueries: true,
                    refetchQueries: [
                      {
                        query: GET_ITEMS,
                      },
                    ],
                  });
                }}
                className="ml-auto"
              >
                X
              </Button>
            </div>
          </ListGroupItem>
        );
      })}
    </ListGroup>
  );
};

export default TodoList;
