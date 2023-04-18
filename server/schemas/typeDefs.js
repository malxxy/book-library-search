const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Books]
  }

  type Books {
    bookId: ID
    authors: [String]
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
  }

  type Mutation {
    getSingleUser(username: String!, email: String!, password: String!): Auth
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(authors: [String]!, description: String!, image: String!, link: String!, title: String!): User
    deleteBook(bookId: ID!): User
  }
`;

module.exports = typeDefs;




