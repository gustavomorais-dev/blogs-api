const route = require('express').Router();
const { loginController } = require('../controllers');
const { validateLoginFields } = require('../middlewares/Login.middleware');

route.post('/', validateLoginFields, loginController.login);

module.exports = route;