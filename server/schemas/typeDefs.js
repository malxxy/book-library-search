const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [bookSchema]
  }

  type savedBooks {
    _id: ID
    authors: String
    description: String
    image: String
    link: String
    title: String
  }

  type Auth {
    token: ID!
    user: User
  }
 

  type Query {
    users: [User]
    user(username: String!): User
    savedBooks: [bookSchema]
  }

  type Mutation {
    getSingleUser(username: String!, email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: String!, description: String!, image: String!, link: String!, title: String!): bookSchema
    deleteBook(bookId: ID!): bookSchema
  }
`;

module.exports = typeDefs;




