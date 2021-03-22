var fs = require("fs");
//Asynchronouse operation
/*fs.readFile("demo.txt",function(err,data){
    if(!err){
        console.log(data.toString());
    }
})*/

//Synchronouse operation 
var data = fs.readFileSync("demo.txt");
console.log(data.toString());
console.log("Normal 1st Message")
console.log("Normal 2nd Message")
console.log("Normal 3rd Message")