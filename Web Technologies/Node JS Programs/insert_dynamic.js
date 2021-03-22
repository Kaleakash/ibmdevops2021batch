var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"mynodedb"
});
con.connect;
var query = "insert into login values(?,?,?)";
con.query(query,['meeta@gmail.com','meeta','000'],function(error,result){
    if(!error){
        if(result.affectedRows>0){
                console.log("Account created successfully...")
        }
    }else {
        console.log(error.sqlMessage);
    }
});
con.end();