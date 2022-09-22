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
// twilio client
// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const phoneNumberTwilio = process.env.TWILIO_PHONE_NUMBER;
// const phoneNumberUser = process.env.USER_PHONE_NUMBER;
// const client = require('twilio')(accountSid, authToken);

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

  // Messenger sockets - Import from Web App (Listen for Web App)
  // Web App to Web App
  // import message from a Client
  socket.on("messengerClient", (message) => {
    console.log("Message from React: ", message);
    // Export message to a Client
    io.emit("messengerClient", message);
  })

  // Web App to Twilio, Twilio to Web App
  // import message from Client, export to Twilio
  // socket.on("messengerSMS", (message) => {
  //   console.log("Message from React: ", message);
  //   // message to Twilio
  //   client.messages
  //   .create({
  //     body: "\n\n" + message,
  //     from: phoneNumberTwilio,
  //     to: phoneNumberUser
  //   })
  //   .then(message => console.log(message.sid));
  // })
});

// Messenger sockets - Export to Web App
// import message from Twilio, and export to Client
// app.post('/sms', (req, res) => {
//   console.log('Object from Twilio: ', req.body);
//   let message = req.body.Body;
//   console.log('Message from Text: ', message);
//   io.emit("messengerSMS", message);
// });

// Opens server without database
server.listen(PORT, () => {
  console.log(`listening on localhost:${PORT}`);
});

// opens DB and server
// db.once('open', () => {
//   server.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
