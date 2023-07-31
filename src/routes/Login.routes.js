const route = require('express').Router();
const { loginController } = require('../controllers');
const { validateLoginParams } = require('../middlewares/Validations.middleware');

route.post('/', validateLoginParams, loginController.login);

module.exports = route;