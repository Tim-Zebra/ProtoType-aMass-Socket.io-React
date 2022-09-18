const express = require('express');
const routes = require('./routes');
const path = require('path');
const db = require('./config/connection');
const http = require('http');
const { Server } = require("socket.io");
const { SocketAddress } = require('net');

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
  console.log('a user connected');
  // messenger socket
  socket.on("messenger", (message) => {
    console.log("Message from React: ", message);
  })
  // socket.emit("messenger", "Message from Server: " )
});


server.listen(3001, () => {
  console.log('listening on localhost:3001');
});

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });

//  Initializes app
function init() {
  // This will begin the prompts for user input
  inquirer
      .prompt("Send message to React")
      .then(response => {
        let message = response;
        io.on("connection", (socket) => {
          socket.emit("messenger", message)
        })
          // This will send the data to the file to write a README.
      });
}

// Function call to initialize app
init();

