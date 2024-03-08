/** @format */

const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const server = http.createServer(app);
const io = new Server(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.use(express.static(path.join(__dirname, 'public')));

io.on('connect', (socket) => {
  console.log('A user connected');

  // Prompt the user to choose a nickname
  socket.emit('request nickname');

  socket.on('set nickname', (nickname) => {
    socket.nickname = nickname;
    console.log(`User ${nickname} connected`);

    // broadcast user nickname connect
    socket.broadcast.emit('user connected', `${nickname} connected`);
  });
  socket.on('chat message', (msg) => {
    io.emit('chat message', { message: msg, nickname: socket.nickname });
  });

  // Handle user disconnections
  socket.on('disconnect', () => {
    if (socket.nickname) {
      console.log(`User ${socket.nickname} disconnected`);
      socket.broadcast.emit(
        'user disconnected',
        `${socket.nickname} disconnected`
      );
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
