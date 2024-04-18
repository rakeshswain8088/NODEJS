const mysql = require('mysql');
const dbConfig = require('./dbConfig');

//create a connection
const connection = mysql.connection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    databse:dbConfig.DATABASE
})

//open the mysql connection
connection.connect(error=>{
    if(error) throw error;
    consolee.log("Successfully connected to Database")
})