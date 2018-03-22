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

UserSchema.methods.checkPassword =  function(potentialPassword, cb) {
  bcrypt.compare(potentialPassword, this.password, (err, isMatch) => {
    if (err) return cb(err);
    cb(null, isMatch);
  });
}
  // return new Promise((resolve, reject) => {
  //   bcrypt.compare(potentialPassword, user.password, (err, result) => {
  //     if (err) { return reject(err);}
  //     return result ? resolve(): reject();
  //   })
  // })
  // .catch(err => {
  //   return err;
  // })

module.exports = mongoose.model('User', UserSchema);
