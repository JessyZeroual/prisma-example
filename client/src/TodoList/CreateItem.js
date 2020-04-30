import React from "react";
import { useMutation } from "@apollo/react-hooks";
import CREATE_ITEM from "./gql/mutation/createItem";
import GET_ITEMS from "./gql/query/getItems";

import { Button, Form } from "reactstrap";

const CreateItem = () => {
  const [createItem] = useMutation(CREATE_ITEM);

  let input;

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem({
      variables: {
        title: input.value,
      },
      awaitRefetchQueries: true,
      refetchQueries: [
        {
          query: GET_ITEMS,
        },
      ],
    }).then((input.value = ""));
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <div className="input-group mb-3">
        <input
          className="form-control"
          ref={(node) => {
            input = node;
          }}
          minLength="3"
          maxLength="20"
          type="text"
          placeholder="add item"
        />
        <div className="input-group-append">
          <Button color="success">Submit</Button>
        </div>
      </div>
    </Form>
  );
};

export default CreateItem;
