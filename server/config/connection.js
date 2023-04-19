const mongoose = require('mongoose');
require ('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = mongoose.connection;
