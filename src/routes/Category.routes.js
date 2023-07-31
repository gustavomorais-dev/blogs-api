const route = require('express').Router();
const { categoryController } = require('../controllers');
const { authMiddlewares, categoryMiddlewares } = require('../middlewares');

route.post(
  '/',
  categoryMiddlewares.validateCategoryFields,
  authMiddlewares.tokenValidation,
  categoryController.createCategory,
);

route.get(
  '/',
  authMiddlewares.tokenValidation,
  categoryController.getAllCategories,
);

module.exports = route;