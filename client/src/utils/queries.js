import { gql } from '@apollo/client';

export const getSingleUser = gql`
  query user {
    user {
          _id
          username
          email
          bookCount
          savedBooks {
              bookId
              authors
              description
              title
              image
              link
        }
      }
    }
`;

