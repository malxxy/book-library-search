import { gql } from '@apollo/client';

export const Login = gql`
  mutation login($username: String!, $email: String!, $password: String!,) {
    createUser(username: $username, email: $email, password: $password) {
      username
      email
      password
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!,) {
    createUser(username: $username, email: $email, password: $password) {
      username
      email
      password
    }
  }
`;
