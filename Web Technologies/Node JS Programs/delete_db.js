var mysql = require("mysql");
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"mynodedb"
});
con.connect;
var query = "delete from login where useremailid=?";
con.query(query,['ajay@gmail.com'],function(error,result){
    if(!error){
        if(result.affectedRows>0){
                console.log("Account deleted successfully...");
        }else {
                console.log("Record not present");
        }
    }else {
        console.log(error.sqlMessage);
    }
});
con.end();