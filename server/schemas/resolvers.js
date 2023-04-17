const { AuthenticationError } = require('apollo-server-express');
const { User  } = require('../models');
const { signToken } = require('../utils/auth');

// getSingleUser
// createUser
// login
// saveBook
// deleteBook

const resolvers = {
    Query: {
      users: async () => {
        return User.find().populate('users')
      },
      user: async (parent, { user }) => {
        return User.findOne({ user }).populate('users');
      },
      //returns all books in database
      books: async () => {
        return User.find().populate('books');
      },
    },
  
    Mutation: {
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No profile found!');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
      saveBook: async (parent, { authors, description, image, link, title }) => {
        const book = await User.book.create({ authors, description, image, link, title });
  
        await User.findOneAndUpdate(
          { username: username },
          { $addToSet: { User: book._id } }
        );
  
        return book;
      },
      deleteBook: async (parent, { bookId }) => {
        return User.findOneAndDelete({ _id: bookId });
      }
    }
  };
  
  module.exports = resolvers;