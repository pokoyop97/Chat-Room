const express = require('express');
const app = express();
const socket = require('./socket');
const http = require('http').createServer(app);


app.use(express.static(__dirname + '/../public'));
socket(http);

module.exports = http;