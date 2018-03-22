const jwt = require('jsonwebtoken');
const { secret } = require('../config');

const getTokenForUser = userObj => {
  return jwt.sign(userObj, secret, { expiresIn: '24h' });
};

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    res.status(422).json({ error: 'Not authorized!' });
  }
  jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      res.status(403).json({ error: 'Invalid token', error });
      return;
    }
    req.decoded = decoded;
    next();
  })
}

module.exports = {
  getTokenForUser,
  validateToken
};