import gql from "graphql-tag";

export default gql`
  mutation updateItem($id: ID!, $title: String, $done: Boolean) {
    updateItem(id: $id, title: $title, done: $done) {
      id
      title
      done
    }
  }
`;
