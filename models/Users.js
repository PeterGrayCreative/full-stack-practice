const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
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

UserSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 11)
    .then(hash =>{
      this.password = hash
      next()
    }).catch(err => err);
})

UserSchema.methods.checkPassword = (potentialPassword) => {
  bcrypt.compare(potentialPassword, this.password)
    .then(isMatch => isMatch)
    .catch(err => err)
}

module.exports = mongoose.model('User', UserSchema);
