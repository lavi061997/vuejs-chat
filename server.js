var app = require("express")();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(request, response){
  response.sendFile(__dirname + "/index.html");
});

io.sockets.on('connection',function(socket){
  console.log("client connected");
  const user = Date.now();

  socket.on('send', function(message){
    console.log(message);
      io.sockets.emit('message', message);
  });
  io.emit('message', 'user'+ user + 'connected');
});


http.listen(3600, function(){
  console.log("server started");
});
