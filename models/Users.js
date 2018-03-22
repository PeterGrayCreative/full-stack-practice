const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserChema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})

module.exports = mongoose.model('User', UserSchema);
