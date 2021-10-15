const {Schema, model} = require('mongoose');
const mongoose = require('mongoose');


const ChatSchemma = new Schema({
    user : String,
    message: String,
    time: Number
});

module.exports = model('Chat', ChatSchemma);