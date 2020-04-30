import gql from "graphql-tag";

export default gql`
  mutation createItem($title: String!) {
    createItem(title: $title) {
      id
      title
    }
  }
`;
