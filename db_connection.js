/**
 * Created By,
 * Muhammad Zahid 20-04-2022
 * email : zahidnasim@live.com
 * Testing Connection
 */

var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
  