// express
const express = require('express');
const routes = require('./routes');
const path = require('path');
require('dotenv').config();
// database
const db = require('./config/connection');
// socket.io set up
const http = require('http');
const { Server } = require("socket.io");
// const { SocketAddress } = require('net');
// twilio
const { MessagingResponse } = require('twilio').twiml;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const phoneNumberTwilio = process.env.TWILIO_PHONE_NUMBER;
const phoneNumberUser = process.env.USER_PHONE_NUMBER;
const client = require('twilio')(accountSid, authToken);

// express
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

// Sets landingpage as index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.use(routes);

// socket.IO
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
  // connection sockets
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });

  // Messenger sockets
  // import message from Client export to Twilio
  socket.on("messenger", (message) => {
    console.log("Message from React: ", message);
  })
  // import message from Twilio and export to Client
  socket.emit("messenger", "Just what do you think you are doing, dave." )
});

// twilio messaging
client.messages
      .create({
         body: 'This will be the body of the new message!',
         from: phoneNumberTwilio,
         to: phoneNumberUser
       })
      .then(message => console.log(message.sid));

server.listen(3001, () => {
  console.log('listening on localhost:3001');
});

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
