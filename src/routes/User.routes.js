const route = require('express').Router();
const { userController } = require('../controllers');
const { validateCreateUserFields } = require('../middlewares/User.middleware');

route.post('/', validateCreateUserFields, userController.createUser);

module.exports = route;