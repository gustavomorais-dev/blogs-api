// Imports
// Tive que colocar para o lint ignorar esse erro de importação, porque a dependência está só no container, 
// e a cor vermelha no arquivo enquanto eu codava estava me incomodando bastante kkkk
// eslint-disable-next-line import/no-unresolved
const Sequelize = require('sequelize');
const config = require('../config/config');

const { BlogPost, PostCategory, User, Category } = require('../models');
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

// Retorna todos os blogposts

// Função auxiliar para formatar os dados de um post

const formatBlogPost = (post) => ({
  id: post.id,
  title: post.title,
  content: post.content,
  userId: post.userId,
  published: post.published,
  updated: post.updated,
  user: {
    id: post.user.id,
    displayName: post.user.displayName,
    email: post.user.email,
    image: post.user.image,
  },
  categories: post.blogPosts.map((category) => ({
    id: category.id,
    name: category.name,
  })),
});

// Função principal para obter todos os posts formatados

const getAllBlogPosts = async () => {
  const blogPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'blogPosts', attributes: ['id', 'name'], through: { attributes: [] } },
    ],
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  });

  return { status: HTTP_STATUS.OK, data: blogPosts.map(formatBlogPost) };
};

// Retorna um post pelo ID

const getBlogPostById = async (id) => {
  const post = await BlogPost.findOne({
    where: { id },
    include: [
      { model: User, as: 'user', attributes: ['id', 'displayName', 'email', 'image'] },
      { model: Category, as: 'blogPosts', attributes: ['id', 'name'], through: { attributes: [] } },
    ],
    attributes: ['id', 'title', 'content', 'userId', 'published', 'updated'],
  });

  if (!post) {
    return { status: HTTP_STATUS.NOT_FOUND, data: { message: 'Post does not exist' } };
  }

  return { status: HTTP_STATUS.OK, data: formatBlogPost(post) };
};

// Exports

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
};
