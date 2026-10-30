const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "YOUR_PASSWORD",
  database: "url_shortener"
});

db.connect(err => {
  if (err) throw err;
  console.log("MySQL Connected...");
});

module.exports = db;
