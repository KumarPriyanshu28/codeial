// const app = require('express')();
// module.exports.chatSockets = function(socketServer){
//     var io = require('socket.io')(socketServer);

//     // console.log(io.sockets.on);

//     // let io = socketServer;

//     // app.get('/', function(req, res) {
//     //     res.sendfile('./views/home.ejs', { root: __dirname });
//     //  });
//     //console.log('***********',socketServer.address().port);
//     io.on('connection', (socket) => {
//         console.log('new connection received', socket.id);

//         socket.on('disconnect', () => {
//             console.log('socket disconnected!');
//         });

//         // socket.on('join_room', function(data){
//         //     console.log('joining request rec.', data);

//         //     socket.join(data.chatroom);

//         //     io.in(data.chatroom).emit('user_joined', data);
//         // })

//     });
// }