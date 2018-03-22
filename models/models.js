const User = require('./Users.js');

const newUser = (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  
  user
    .save()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    })
};

const getUsers =(req, res) => {
  User.find({})
    .then(users => {
      if (users) {
      res.status(200).json(users);
      } else res.status(200).json({error: 'No Users Found'})
    })
    .catch(err => {
      res.status(500).json({ error: err });
    })
};

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      if (user) {
      user.checkPassword(password)
        .then(res => {
          if(res) {
            res.status(200).json(user);
          }
          else res.status(422).json({error: 'Wrong Password or Username'})
        })
      } else res.status(422).json({error: 'Wrong Password or Username'})
    })
    .catch(err => {
      res.status(500).json({ error: err });
    })
};

module.exports = {
  newUser,
  getUsers,
  login
}