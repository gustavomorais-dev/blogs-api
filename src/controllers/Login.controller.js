const { loginService } = require('../services');
const HTTP_STATUS = require('../utils/statusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const { status, data } = await loginService.login(email, password);

    return res.status(status).json(data);
  } catch (error) {
    console.error('Ocorreu um erro:', error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: 'Ocorreu um erro no servidor.' });
  }
};

module.exports = {
  login,
};
