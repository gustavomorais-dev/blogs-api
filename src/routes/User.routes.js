const route = require('express').Router();
const { userController } = require('../controllers');
const { authMiddlewares, userMiddlewares } = require('../middlewares');

route.post('/', userMiddlewares.validateCreateUserFields, userController.createUser);

route.get('/', authMiddlewares.tokenValidation, userController.getAllUsers);

module.exports = route;