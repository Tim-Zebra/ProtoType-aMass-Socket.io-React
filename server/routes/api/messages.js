const router = require('express').Router();
const {
 getMessages,
 saveMessages
} = require('../../controllers/user-controller');

// Routes
// GET
router.route('/').get(getMessages);

// POST
router.route('/saveMessages').get(saveMessages);