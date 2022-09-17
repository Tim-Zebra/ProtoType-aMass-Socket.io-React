const router = require('express').Router();

// Routes
const apiRoutes = require('./api');



// Gets api routes
router.use('/api', apiRoutes);

module.exports = router;
