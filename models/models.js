const User = require('./Users.js');

const newUser = (req, res) => {
  const { username, password } = req.body;
  const user = User({ username, password });
  user.save()
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
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    })
};

const login = (req, res) => {
  const { username, password } = req.body;
  User.findOne({ username })
    .then(user => {
      res.status(200).json(user);
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