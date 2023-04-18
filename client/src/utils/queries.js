import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      username
      email
    }
  }
`;

export const QUERY_BOOK = gql`
  query matchups($bookId: String) {
    matchups($bookId: $_id) {
      authors
      title
      description
    }
  }
`;
