const { User } = require('../models');
const { createToken } = require('../utils/jwt.util');
const HTTP_STATUS = require('../utils/statusHTTP.util');

const createUser = async (email, password, displayName, image) => {
  const existingUser = await User.findOne({
    where: { email },
  });

  if (existingUser) {
    return { status: HTTP_STATUS.CONFLICT, data: { message: 'User already registered' } };
  }

  await User.create({
    email,
    password,
    displayName,
    image: image || 'blank',
  });

  const token = createToken(email);

  return { status: HTTP_STATUS.CREATED, data: { token } };
};

const getAllUsers = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });
  return { status: HTTP_STATUS.OK, data: users };
};

module.exports = {
  createUser,
  getAllUsers,
};
