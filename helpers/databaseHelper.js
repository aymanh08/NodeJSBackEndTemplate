//Import depencies
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: "<hostname>",
  user: "<username>",
  password: "<password>"
  
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to database!");
});

module.exports = connection;