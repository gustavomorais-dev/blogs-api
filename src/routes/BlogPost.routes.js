const route = require('express').Router();
const { blogPostController } = require('../controllers');
const { authMiddlewares, blogPostMiddlewares } = require('../middlewares');

route.post(
  '/',
  authMiddlewares.tokenValidation,
  blogPostMiddlewares.validateBlogPostFields,
  blogPostController.createBlogPost,
);

route.get(
  '/',
  authMiddlewares.tokenValidation,
  blogPostController.getAllBlogPosts,
);

module.exports = route;