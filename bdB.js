var mysql = require("mysql");
var connection = mysql.createConnection({
    host:'localhost',
    user:"admin-3be",
    password:'root',
    database:'examen_tech_web'
});
connection.connect(function(error){ if(error) console.log(error);});

exports.connectionBDD = connection;