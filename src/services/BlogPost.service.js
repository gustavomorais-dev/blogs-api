// Imports
// Tive que colocar para o lint ignorar esse erro de importação, porque a dependência está só no container, 
// e a cor vermelha no arquivo enquanto eu codava estava me incomodando bastante kkkk
// eslint-disable-next-line import/no-unresolved
const Sequelize = require('sequelize');
const config = require('../config/config');

const { BlogPost, PostCategory } = require('../models');
const HTTP_STATUS = require('../utils/statusHTTP.util');
const { getCategoryById } = require('./Category.service');

// Constantes

const env = process.env.NODE_ENV || 'development';
const sequelize = new Sequelize(config[env]);

// Cria um novo blogpost

const createBlogPost = async (title, content, userId, categoryIds) => {
  try {
    const result = await sequelize.transaction(async (t) => {
      const blogPost = await BlogPost.create({ title, content, userId }, { transaction: t });
      const postId = blogPost.id;

      const promises = categoryIds.map(async (categoryId) => {
        const category = await getCategoryById(categoryId);
        if (category.status === HTTP_STATUS.NOT_FOUND) {
          throw new Error('one or more "categoryIds" not found');
        }
        await PostCategory.create({ postId, categoryId }, { transaction: t });
      });

      await Promise.all(promises);

      return blogPost;
    });

    return { status: HTTP_STATUS.CREATED, data: result };
  } catch (error) {
    return { status: HTTP_STATUS.BAD_REQUEST, data: { message: error.message } };
  }
};

// Exports

module.exports = {
  createBlogPost,
};
