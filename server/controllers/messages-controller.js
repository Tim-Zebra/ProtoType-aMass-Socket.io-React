// // import user model
// const { Message } = require('../models');

// module.exports = {
//   // get a single user by either their id or their username
//   async getMessages({ user = null, params }, res) {
//     const foundMessages = await Message.findAll({});

//     if (!foundMessages) {
//       return res.status(400).json({ message: 'Cannot find messages' });
//     }

//     res.json(foundMessages);
//   },
//   async saveMessages({ body }, res) {
//     try {
//       const updatedMessages = await Message.findOneAndUpdate(
//         { _id: user._id },
//         { $addToSet: { savedMessages: body } },
//         { new: true, runValidators: true }
//       );
//       return res.json(updatedMessages);
//     } catch (err) {
//       console.log(err);
//       return res.status(400).json(err);
//     }
//   },
// };