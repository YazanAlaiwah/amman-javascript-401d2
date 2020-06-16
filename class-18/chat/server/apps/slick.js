// using the "slick" namespace to have all slick connections here and no other namespace connections
// use "rooms" to indicate the channel they are chatting in

module.exports = (io) => {
  const slick = io.of('/slick'); // of => create namespace
  slick.on('connection', (socket) => {
    // console.log('hi', socket);
    console.log('Welcome to the Slick App!', socket.id);
    let currentRoom = '';
    //when user join a new room leave room and all the chat will only be in the new room
    socket.on('join', (room) => {
      socket.leave(currentRoom);
      socket.join(room);
      currentRoom = room;
      console.log('joined room', room);
      // io.emit seen by anyone connected to the server
      io.emit('action', `Someone joined the room: ${room}`);
      // it will goes to the sender only using the socket.id
      slick.to(`${socket.id}`).emit('joined', room);

      socket.on('message', (payload) => {
        // emitting to everyone in the room including the sender
        slick.to(currentRoom).emit('message', payload);
      });
    });
  });
};
