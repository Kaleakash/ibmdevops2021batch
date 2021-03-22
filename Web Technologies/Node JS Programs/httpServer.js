var http = require("http");

var server = http.createServer(function(req,res){
    console.log("Client send the request");
    res.end("Welcome to Http Node module");
})

server.listen(8989,function(){
    console.log("Server is running on port number 8888");
})

/*
first run the program using command as 
node httpServer.js 

open browser 

http://localhost:8989/

*/