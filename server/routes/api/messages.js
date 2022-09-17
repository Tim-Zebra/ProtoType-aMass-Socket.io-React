const router = require('express').Router();
// const {
//  getMessages,
//  saveMessages
// } = require('../../controllers/messages-controller');

// Routes
// GET
// router.route('/').get(getMessages);

// // POST
// router.route('/saveMessages').get(saveMessages);

// testing twilio function

router.get("/", function(req, res, next) {
  console.log('API is working properly');
});

module.exports = router;
