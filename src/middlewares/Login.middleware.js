const HTTP_STATUS = require('../utils/statusHTTP.util');

const validateLoginFields = (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(HTTP_STATUS.BAD_REQUEST)
      .json({
        message: 'Some required fields are missing',
      });
  }

  next();
};

module.exports = {
  validateLoginFields,
};
