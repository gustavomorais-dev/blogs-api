const loginMiddlewares = require('./Login.middleware');
const userMiddlewares = require('./User.middleware');
const authMiddlewares = require('./Auth.middleware');
const categoryMiddlewares = require('./Category.middleware');
const blogPostMiddlewares = require('./BlogPost.middleware');

module.exports = {
  loginMiddlewares,
  userMiddlewares,
  authMiddlewares,
  categoryMiddlewares,
  blogPostMiddlewares,
};