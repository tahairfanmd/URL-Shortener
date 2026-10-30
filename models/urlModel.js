const db = require("../config/db");

exports.createUrl = (data, callback) => {
  const query = "INSERT INTO urls (original_url, short_code) VALUES (?, ?)";
  db.query(query, [data.original_url, data.short_code], callback);
};

exports.getAllUrls = (callback) => {
  db.query("SELECT * FROM urls", callback);
};

exports.deleteUrl = (id, callback) => {
  db.query("DELETE FROM urls WHERE id = ?", [id], callback);
};

exports.getByCode = (code, callback) => {
  db.query("SELECT * FROM urls WHERE short_code = ?", [code], callback);
};
