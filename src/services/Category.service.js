// Imports

const { Category } = require('../models');
const HTTP_STATUS = require('../utils/statusHTTP.util');

// Cria uma nova categoria

const createCategory = async (name) => {
  const existingCategory = await Category.findOne({
    where: { name },
  });

  if (existingCategory) {
    return { status: HTTP_STATUS.CONFLICT, data: { message: 'Category already registered' } };
  }

  const newCategory = await Category.create({ name });

  return { status: HTTP_STATUS.CREATED, data: newCategory };
};

// Retorna todos as categorias

const getAllCategories = async () => {
  const users = await Category.findAll();
  return { status: HTTP_STATUS.OK, data: users };
};

// Exports

module.exports = {
  createCategory,
  getAllCategories,
};
