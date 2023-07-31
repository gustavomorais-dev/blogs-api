const HTTP_STATUS = require('../utils/statusHTTP.util');

const validateCategoryFields = (req, res, next) => {
  const { name } = req.body;

  if (!name) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({
        message: '"name" is required',
      });
  }

  next();
};

module.exports = {
  validateCategoryFields,
};
