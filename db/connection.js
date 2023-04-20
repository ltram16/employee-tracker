
const mysql = require("mysql2");
const { promisify } = require("util");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "Tram2309996!",
  database: "employees",
  port: 3306
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.query = promisify(connection.query);
});

module.exports = connection;
