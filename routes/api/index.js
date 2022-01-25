const router = require('express').Router();
const userRoutes = require('./user-routes.js');

// direct the path to be used with API routes within userRoutes
router.use('/users', userRoutes);

module.exports = router;