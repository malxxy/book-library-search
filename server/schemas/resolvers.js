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
      // i believe this route is correct
      user: async (parent, { User }, context) => {
        if (context.user) {
          const userInfo = await User.findOne({ _id: context.user._id }).select('-__v -password').populate('books');
          return userInfo;
        }
        throw new AuthenticationError('Not logged in!');
      }
    },
  
    Mutation: {
      // I believe this route is correct
      createUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      // I believe this route is correct
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('Incorrect!');
        }
  
        const correctPw = await profile.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
      saveBook: async (parent, { authors, description, image, link, title }, context) => {
        if(context.user) {
          const saveBook = await User.findByIdAndUpdate(
            {_id: context.user._id},
            { $addToSet: { savedBooks: { authors, description, image, link, title }}},
            {new: true}
            );
    
          return saveBook;
        }
        throw new AuthenticationError('Not logged in!');
      },
      deleteBook: async (parent, { bookId }, context) => {
        if(context.user) {
          return User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: {savedBooks: { bookId: bookId}}},
            { new: true}
            );
        }
        throw new AuthenticationError('Not logged in!');
      }
    }
  };
  
  module.exports = resolvers;