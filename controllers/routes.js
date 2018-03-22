const { newUser, getUsers, login } = require('../models/models.js');
const { validateToken } = require('../services/jwtauth');
module.exports = server => {
  server.post('/api/login', login);
  server
    .route('/api/users')
    .post(newUser)
    .get(validateToken, getUsers);
};
