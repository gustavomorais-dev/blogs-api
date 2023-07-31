// Imports

const { isValidToken } = require('../utils/jwt.util');
const HTTP_STATUS = require('../utils/statusHTTP.util');

// Middleware de validação de token

const tokenValidation = (req, res, next) => {
  const auth = req.header('Authorization');

  if (!auth) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  if (!auth.startsWith('Bearer ')) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }

  const token = auth.split(' ')[1];

  const validToken = isValidToken(token);

  if (!validToken) {
    return res.status(HTTP_STATUS.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }

  next();
};

// Exports

module.exports = {
  tokenValidation,
};