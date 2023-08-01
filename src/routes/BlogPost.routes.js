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

route.get(
  '/:id',
  authMiddlewares.tokenValidation,
  blogPostController.getBlogPostById,
);

route.put(
  '/:id',
  authMiddlewares.tokenValidation,
  blogPostMiddlewares.validateUpdateBlogPostFields,
  blogPostController.updateBlogPostById,
);

route.delete(
  '/:id',
  authMiddlewares.tokenValidation,
  blogPostController.deleteBlogPostById,
);

module.exports = route;