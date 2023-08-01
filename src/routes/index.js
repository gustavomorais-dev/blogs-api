const express = require('express');

const loginRoutes = require('./Login.routes');
const userRoutes = require('./User.routes');
const categoryRoutes = require('./Category.routes');
const blogPostRoutes = require('./BlogPost.routes');

const router = express.Router();

router.use('/login', loginRoutes);
router.use('/user', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/post', blogPostRoutes);

module.exports = router;
