const { User } = require('../models');
const { createToken } = require('../utils/jwt.util');
const HTTP_STATUS = require('../utils/statusHTTP.util');

const login = async (userEmail, userPassword) => {
    const user = await User.findOne({
      where: { email: userEmail, password: userPassword },
    });

    if (!user) {
      return { status: HTTP_STATUS.BAD_REQUEST, data: { message: 'Invalid fields' } };
    }

    const token = createToken(userEmail);

    return { status: HTTP_STATUS.OK, data: { token } };
};

module.exports = {
  login,
};
