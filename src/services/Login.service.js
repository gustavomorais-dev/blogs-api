const { User } = require('../models');
const { createToken } = require('../utils/jwt.util');
const HTTP_STATUS = require('../utils/statusHTTP.util');

const login = async (email, password) => {
    const user = await User.findOne({
      where: { email, password },
    });

    if (!user) {
      return { status: HTTP_STATUS.BAD_REQUEST, data: { message: 'Invalid fields' } };
    }

    const token = createToken(email);

    return { status: HTTP_STATUS.OK, data: { token } };
};

module.exports = {
  login,
};