// Imports

const { User } = require('../models');
const { createToken } = require('../utils/jwt.util');
const HTTP_STATUS = require('../utils/statusHTTP.util');

// Cria um novo usuário

const createUser = async (email, password, displayName, image) => {
  const existingUser = await User.findOne({
    where: { email },
  });

  if (existingUser) {
    return { status: HTTP_STATUS.CONFLICT, data: { message: 'User already registered' } };
  }

  await User.create({
    email,
    password,
    displayName,
    image: image || 'blank',
  });

  const token = createToken(email);

  return { status: HTTP_STATUS.CREATED, data: { token } };
};

// Retorna todos os usuários cadastrados

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: HTTP_STATUS.OK, data: users };
};

// Retorna um usuário cadastrado buscando pelo ID

const getUserById = async (id) => {
  const user = await User.findOne({
    where: { id },
    attributes: { exclude: ['password'] },
  });

  if (!user) {
    return { status: HTTP_STATUS.NOT_FOUND, data: { message: 'User does not exist' } };
  }

  return { status: HTTP_STATUS.OK, data: user };
};

// Retornar um usuário cadastrado buscando pelo email

const getUserIdByEmail = async (email) => {
    const user = await User.findOne({
      where: { email },
      attributes: ['id'],
    });

    if (user) {
      return user.id;
    }

    return null;
};

// Deleta um user pelo ID

const deleteUserById = async (id) => {
  await User.destroy({
    where: { id },
  });

  return { status: HTTP_STATUS.NO_CONTENT, data: null };
};

// Exports

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  getUserIdByEmail,
  deleteUserById,
};
