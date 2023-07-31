// Imports

const { userService } = require('../services');
const HTTP_STATUS = require('../utils/statusHTTP.util');

// Cria um novo usuário

const createUser = async (req, res) => {
  const { email, password, displayName, image } = req.body;

  try {
    const { status, data } = await userService.createUser(email, password, displayName, image);

    return res.status(status).json(data);
  } catch (error) {
    console.error('Ocorreu um erro:', error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: 'Ocorreu um erro no servidor.' });
  }
};

// Retorna todos os usuários

const getAllUsers = async (req, res) => {
  try {
    const { status, data } = await userService.getAllUsers();

    return res.status(status).json(data);
  } catch (error) {
    console.error('Ocorreu um erro:', error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: 'Ocorreu um erro no servidor.' });
  }
};

// Retorna um usuário buscando pelo ID

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const { status, data } = await userService.getUserById(id);

    return res.status(status).json(data);
  } catch (error) {
    console.error('Ocorreu um erro:', error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: 'Ocorreu um erro no servidor.' });
  }
};

// Exports

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
};
