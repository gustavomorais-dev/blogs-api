const { userService } = require('../services');
const HTTP_STATUS = require('../utils/statusHTTP.util');

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

module.exports = {
  createUser,
};
