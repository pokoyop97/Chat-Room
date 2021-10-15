const mongoose = require('mongoose');  
const ChatSchemma = require('./chat')

module.exports = (http)=> {
    mongoose.connect('mongodb://localhost/chatroom', function(err, db){
    const io = require('socket.io')(http);
        io.on('connection',(socket)=>{
            ChatSchemma.find({}, function(err, data){
                historial = data;
                for(var k in historial){
                    aux={
                        nick: historial[k].user,
                        message: historial[k].message,
                        date: historial[k].date
                    }
                    io.emit('chat-message',aux)
                }
            })
            socket.on('chat-message',(msg)=>{
                ChatSchemma.create({
                    user: msg.nick,
                    message: msg.message,
                    date: msg.date
                })
                io.emit('chat-message',msg);
            });
            socket.on('disconnect',()=>{
            })
        });
    });
}


