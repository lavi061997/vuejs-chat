var app = require("express")();
const http = require('http').Server(app);


app.get('/', function(request, response){
  response.sendFile(__dirname + "/index.html");
})


http.listen(3600, function(){
  console.log("server started");
});
