var mysql = require("mysql");   //loading the module 
var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root@123",
    database:"mynodedb"
});                         // connecting the database. 
con.connect((err)=>{
    if(!err){
        console.log("Connected successfully")
    }else {
        console.log("Error generated "+err);
    }
});
var query ="select * from login";       // query store in variable 
con.query(query,(error,result)=> {  //1st parameter query and 2nd callback 
        if(!error){
            //console.log(result);
            result.forEach(data=> {
            console.log("email is id "+data.useremailid);
            })
        }
});
con.end();

