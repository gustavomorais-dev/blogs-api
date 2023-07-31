const express = require('express');
const loginRoutes = require('./Login.routes');

const router = express.Router();

router.use('/login', loginRoutes);

module.exports = router;
