const router = require('express').Router();

// Routes
const apiRoutes = require('./api');

// serve up react front-end in production
// router.use((req, res) => {
//   res.sendFile(path.join(__dirname, '../../client/build/index.html'));
// });

// Gets api routes
router.use('/api', apiRoutes);

module.exports = router;
