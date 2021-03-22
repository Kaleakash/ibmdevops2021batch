var http = require("http");

var server = http.createServer(function(req,res){
    if(req.url=="/AboutUs"){
        res.end("You requested for about us page")
    }else if(req.url=="/ContactUs"){
        res.end("You requested for contact us page");
    }else {
        res.end("You requested for general page");
    }
  
})

server.listen(8989,function(){
    console.log("Server is running on port number 8888");
})