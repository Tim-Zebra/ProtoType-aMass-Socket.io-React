const router = require('express').Router();
const messagesRoutes = require('./messages');

router.use('/messages', messagesRoutes);

module.exports = router;