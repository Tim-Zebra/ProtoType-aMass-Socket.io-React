const express = require('express');
const routes = require('./routes');
const db = require('./config/connection');
const http = require('http');
const { Server } = require("socket.io");

// express
const app = express();
const PORT = process.env.PORT || 3001;

// socket.IO
const server = http.createServer(app);
const io = new Server(server);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

