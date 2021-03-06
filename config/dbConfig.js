const mysql = require('mysql');

const dbConn = mysql.createConnection({
    host:'localhost',
    user: 'devUser',
    password: 'azerty1234',
    database: 'resAvionAndroid'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log("Database connected successfully !");
});





module.exports = dbConn;