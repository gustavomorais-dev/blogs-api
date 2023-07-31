const express = require('express');

const loginRoutes = require('./Login.routes');
const userRoutes = require('./User.routes');

const router = express.Router();

router.use('/login', loginRoutes);
router.use('/user', userRoutes);

module.exports = router;
