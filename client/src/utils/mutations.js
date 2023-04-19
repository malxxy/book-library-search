import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!,) {
    login(email: $email, password: $password) {
      user {
        email
        password
        }
      token
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!,) {
    createUser(username: $username, email: $email, password: $password) {
      user {
        username
        email
        password
        }
      token
    }
  }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($bookId: bookId!, $authors:[String], $description: String, $image: String, $link: String, $title: String!) {
        saveBook(bookId: $bookId, authors: $authors, description: $description, image: $image, link: $link, title: $title) {
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

export const DELETE_BOOK = gql`
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
