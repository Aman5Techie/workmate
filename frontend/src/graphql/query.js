import { gql } from "@apollo/client";

export const getUser = gql`
  query {
    userQuery {
      users {
        id
      }
    }
  }
`;
