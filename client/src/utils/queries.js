import { gql } from '@apollo/client';

export const getSingleUser = gql`
  query user {
    user {
          _id
          username
          email
          password
          savedBooks {
              bookId
              authors
              description
              image
              link
              title
        }
      }
    }
`;

