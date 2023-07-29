'use strict';

module.exports = {

  /**
  * @param {import('sequelize').QueryInterface} queryInterface
  * @param {import('sequelize')} Sequelize
  */

  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts_categories', {
      postId: {
        field: 'post_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'blog_posts',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      categoryId: {
        field: 'category_id',
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id',
        },
        onDelete: 'CASCADE',
        primaryKey: true,
      }
    }, {
      timestamps: false,
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts_categories');
  }
};
