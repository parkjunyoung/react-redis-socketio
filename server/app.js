const express = require('express');
const redis = require('socket.io-redis');
const path = require('path');

const app = express();
var port = process.env.PORT || 3000;

app.get('*', function(req,res){
    res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});

const server = app.listen( port, function(){
    console.log('Express listening on port', port);
});

const listen = require('socket.io');
const io = listen(server);
// io.adapter(redis({ host: '127.0.0.1', port: 6379 }));
io.adapter(redis({ host: 'redis', port: 6379 }));
require('./socketConnection')(io);
