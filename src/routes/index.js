const express = require('express');

const loginRoutes = require('./Login.routes');
const userRoutes = require('./User.routes');
const categoryRoutes = require('./Category.routes');

const router = express.Router();

router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);

module.exports = router;
