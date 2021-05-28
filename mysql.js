/* first install mysql using npm i mysql command */

var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:'',
    database:'records'
});
con.connect(function(error){
    if(error) throw error;
    console.log("connected");
    con.query('select * from login', function(error,result){
        if(error) throw error;
        console.warn("all datas", result);
    })
})
