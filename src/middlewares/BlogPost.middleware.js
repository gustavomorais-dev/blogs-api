const HTTP_STATUS = require('../utils/statusHTTP.util');
const { isValidCategoryIds } = require('./validations/input.validation');

const validateBlogPostFields = async (req, res, next) => {
  const { title, content, categoryIds } = req.body;

  if (!title || !content || !categoryIds) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({
        message: 'Some required fields are missing',
      });
  }

  const invalidCategoryIds = await isValidCategoryIds(categoryIds);

  if (invalidCategoryIds) {
    return res.status(invalidCategoryIds.status).json({ message: invalidCategoryIds.message });
  }

  next();
};

const validateUpdateBlogPostFields = async (req, res, next) => {
  const { title, content } = req.body;

  if (!title || !content) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({
        message: 'Some required fields are missing',
      });
  }

  next();
};

module.exports = {
  validateBlogPostFields,
  validateUpdateBlogPostFields,
};
