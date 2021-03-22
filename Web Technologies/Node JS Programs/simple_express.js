var express = require("express");   // load the module 
var app = express();        // creating the instance of that module 
// default path 
app.get("/",(req,res)=>{

    res.send("Welcome to Node JS Express module with default path ");

});
app.get("/aboutus",(req,res)=>{

    res.send("About Us Details");

});
app.get("/contactus",(req,res)=>{

    res.send("contactus");

});

app.get("/checkUser",(req,res)=>{
        var user = req.query["user"];
        var pass = req.query["pass"];
        if(user=="Ajay" && pass=="Kumar"){
            res.send("Successfully Login")
        }else {
            res.send("Failure try once again");
        }
});

app.get("/login",(req,res)=>{
    res.sendFile(__dirname+"\\login.html");
   //res.sendFile("C:\\Users\\91990\\Desktop\\IBM DevOps\\Web Technologies\\Node JS Programs\\login.html");
});
app.listen(9999,()=>console.log("Server is running on port number 9999"))


