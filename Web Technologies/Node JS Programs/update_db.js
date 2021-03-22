var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"mynodedb"
});
con.connect;
var query = "update login set password = ? where useremailid=?";
con.query(query,['1234','raju@gmail.com'],function(error,result){
    if(!error){
        if(result.affectedRows>0){
                console.log("Your password updated successfully...");
        }else {
                console.log("Record not present");
        }
    }else {
        console.log(error.sqlMessage);
    }
});
con.end();