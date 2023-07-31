const {
  isValidDisplayName,
  isValidPassword,
  isValidEmail,
} = require('./validations/input.validation');

const validateCreateUserFields = async (req, res, next) => {
  const { email, password, displayName } = req.body;

  const invalidDisplayName = await isValidDisplayName(displayName);
  const invalidPassword = await isValidPassword(password);
  const invalidEmail = await isValidEmail(email);

  if (invalidDisplayName) {
    return res.status(invalidDisplayName.status).json({ message: invalidDisplayName.message });
  }

  if (invalidPassword) {
    return res.status(invalidPassword.status).json({ message: invalidPassword.message });
  }

  if (invalidEmail) {
    return res.status(invalidEmail.status).json({ message: invalidEmail.message });
  }

  next();
};

module.exports = {
  validateCreateUserFields,
};
