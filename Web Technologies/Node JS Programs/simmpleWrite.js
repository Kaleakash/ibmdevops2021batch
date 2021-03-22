//load fs modules like import 
var fs = require("fs");
var simpleMsg = "Welcome to Node JS file system";
fs.writeFile("demo.txt",simpleMsg,function(err){
    if(!err){
        console.log("data stored in file ")
    }
})
