const HTTP_STATUS = require('../../utils/statusHTTP.util');
const { displayNameSchema, passwordSchema, emailSchema } = require('./schemas');

const isValidDisplayName = async (data) => {
  const { error } = displayNameSchema.validate(data);
  const message = '"displayName" length must be at least 8 characters long';
  if (error) return { status: HTTP_STATUS.BAD_REQUEST, message };
};

const isValidPassword = async (data) => {
  const { error } = passwordSchema.validate(data);
  const message = '"password" length must be at least 6 characters long';
  if (error) return { status: HTTP_STATUS.BAD_REQUEST, message };
};

const isValidEmail = async (data) => {
  const { error } = emailSchema.validate(data);
  const message = '"email" must be a valid email';
  if (error) return { status: HTTP_STATUS.BAD_REQUEST, message };
};

module.exports = {
  isValidDisplayName,
  isValidPassword,
  isValidEmail,
};
