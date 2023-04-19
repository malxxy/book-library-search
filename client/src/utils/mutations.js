import { gql } from '@apollo/client';

export const Login = gql`
  mutation login($email: String!, $password: String!,) {
    login(email: $email, password: $password) {
      username
      email
      password
    }
  }
`;

export const create_User = gql`
  mutation createUser($username: String!, $email: String!, $password: String!,) {
    createUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
        email
        password
      }
    }
  }
`;

export const saveBook = gql`
    mutation saveBook($authors:[String]!, $description: String!, $image: String!, $link: String!, $title: String!) {
        saveBook(authors: $authors, description: $description, image: $image, link: $link, title: $title) {
            _id
            username
            email
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

export const delete_Book = gql`
    mutation deleteBook($authors:[String]!, $description: String!, $image: String!, $link: String!, $title: String!) {
        deleteBook(authors: $authors, description:$description, image: $image, link: $link, title: $title) {
            _id
            username
            email
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
