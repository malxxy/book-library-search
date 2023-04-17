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
      user: async (parent, { user }) => {
        if (context.user) {
          const user = await User.findOne({ _id: context.user._id }).select('-__v -password').populate('books');
          return user;
        }
        throw new AuthenticationError('Not logged in!');
      }
    },
  
    Mutation: {
      // I believe this route is correct
      addUser: async (parent, { username, email, password }) => {
        const user = await User.create({ username, email, password });
        const token = signToken(user);
  
        return { token, user };
      },
      // I believe thi route is correct
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
      saveBook: async (parent, { authors, description, image, link, title }) => {
        if(context.user) {
          const saveBook = await User.findByIdAndUpdate({ authors, description, image, link, title });
    
          await User.findOneAndUpdate(
            { username: username },
            { $addToSet: { User: book._id } }
          );
    
          return saveBook;
        }
        throw new AuthenticationError('Not logged in!');
      },
      deleteBook: async (parent, { bookId }) => {
        return User.findOneAndDelete({ _id: bookId });
      }
    }
  };
  
  module.exports = resolvers;