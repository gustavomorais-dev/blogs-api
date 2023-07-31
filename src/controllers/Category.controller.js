const { categoryService } = require('../services');
const HTTP_STATUS = require('../utils/statusHTTP.util');

const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const { status, data } = await categoryService.createCategory(name);

    return res.status(status).json(data);
  } catch (error) {
    console.error('Ocorreu um erro:', error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: 'Ocorreu um erro no servidor.' });
  }
};

module.exports = {
  createCategory,
};
