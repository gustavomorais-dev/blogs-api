const { blogPostService } = require('../services');
const { getUserIdByEmail } = require('../services/User.service');
const HTTP_STATUS = require('../utils/statusHTTP.util');

const errorMessage = 'Ocorreu um erro:';
const serverErrorMessage = 'Ocorreu um erro no servidor.';

const createBlogPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  try {
    const userId = await getUserIdByEmail(req.userEmail);
    const { status, data } = await blogPostService
      .createBlogPost(title, content, userId, categoryIds);

    return res.status(status).json(data);
  } catch (error) {
    console.error(errorMessage, error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: serverErrorMessage });
  }
};

const getAllBlogPosts = async (req, res) => {
  try {
    const { status, data } = await blogPostService.getAllBlogPosts();

    return res.status(status).json(data);
  } catch (error) {
    console.error(errorMessage, error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: serverErrorMessage });
  }
};

const getBlogPostById = async (req, res) => {
  const { id } = req.params;

  try {
    const { status, data } = await blogPostService.getBlogPostById(id);

    return res.status(status).json(data);
  } catch (error) {
    console.error(errorMessage, error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: serverErrorMessage });
  }
};

const updateBlogPostById = async (req, res) => {
  const { id } = req.params;
  const newData = req.body;

  try {
    const userId = await getUserIdByEmail(req.userEmail);
    const { status, data } = await blogPostService.updateBlogPostById(id, newData, userId);

    return res.status(status).json(data);
  } catch (error) {
    console.error(errorMessage, error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: serverErrorMessage });
  }
};

const deleteBlogPostById = async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await getUserIdByEmail(req.userEmail);
    const { status, data } = await blogPostService.deleteBlogPostById(id, userId);

    return res.status(status).json(data);
  } catch (error) {
    console.error(errorMessage, error);

    return res
      .status(HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({ error: serverErrorMessage });
  }
};

module.exports = {
  createBlogPost,
  getAllBlogPosts,
  getBlogPostById,
  updateBlogPostById,
  deleteBlogPostById,
};
