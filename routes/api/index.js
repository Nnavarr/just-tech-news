const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');

// direct the path to be used with API routes within userRoutes
router.use('/users', userRoutes);
router.use('/posts', postRoutes);

module.exports = router;