const { blogPostService } = require('../services');
const { getUserIdByEmail } = require('../services/User.service');
const HTTP_STATUS = require('../utils/statusHTTP.util');

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  try {
    const userId = await getUserIdByEmail(req.userEmail);
    const { status, data } = await blogPostService
      .createBlogPost(title, content, userId, categoryIds);

    return res.status(status).json(data);
  } catch (error) {
    console.error('Ocorreu um erro:', error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: 'Ocorreu um erro no servidor.' });
  }
};

module.exports = {
  createBlogPost,
};
