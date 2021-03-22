var express = require("express");
var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"mynodedb"
});
con.connect;
app.get("/",(req,res)=>{
    res.sendFile(__dirname+"\\login.html");
});
app.post("/checkLogin",(req,res)=> {
    var emailId = req.body.emailId;
    var pass = req.body.pass;
    var query = "select * from login where useremailid = ? and password =?";
    con.query(query,[emailId,pass],function(err,result){
        if(!err){
           if(result.length==0){
            res.send("UserName or password is wrong");
           }else {
            res.sendFile(__dirname+"\\home.html");
           }
        }else {
           console.log("Exception generated "+err)
           res.end();
        }
    })
})
app.listen(9999,()=>console.log("Server started"));
//con.end();