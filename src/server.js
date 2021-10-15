const http = require('./app');
const port = 8080;

http.listen(port, () => {
    console.log('ChatRoom is running on http://localhost:'+port);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/chatroom', function(err, db){
    if(err){
        throw err;
    }
})