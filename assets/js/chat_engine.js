// class ChatEngine{
//     constructor(chatBoxId, userEmail){
//         this.chatBox = $(`#${chatBoxId}`);
//         this.userEmail = userEmail;


//         // const socket = io('http://localhost:5000');

//         this.socket = io.connect('http://localhost:5000');
//         // console.log('chat id : ',io);

//         if (this.userEmail){
//             this.connectionHandler();
//         }

//     }
//     connectionHandler(){
//         //let self = this;

//         this.socket.on('connect', function(){
//             console.log('connection established using sockets...!');

//             // self.socket.emit('join_room', {
//             //     user_email: self.userEmail,
//             //     chatroom: 'codeial'
//             // });

//             // self.socket.on('user_joined',function(data){
//             //     console.log('a user joined', data);
//             // })
//         });
//     }
// }


//include this in home.ejs
{/* <script src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.5.0/socket.io.js"></script>
<script src="/js/chat_engine.js"></script>

<% if (locals.user){ %>
    <script>
        new ChatEngine('user-chat-box', '<%= locals.user.email %>')
    </script>
<% } %> */}