const { newUser, getUsers, login } = require('../models/models.js');

module.exports = server => {
  server.post('/api/login', login);
  server
    .route('/api/users')
    .post(newUser)
    .get(getUsers);
};
