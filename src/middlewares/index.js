const loginMiddlewares = require('./Login.middleware');
const userMiddlewares = require('./User.middleware');
const authMiddlewares = require('./Auth.middleware');
const categoryMiddlewares = require('./Category.middleware');

module.exports = {
  loginMiddlewares,
  userMiddlewares,
  authMiddlewares,
  categoryMiddlewares,
};