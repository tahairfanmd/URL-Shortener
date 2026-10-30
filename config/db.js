const mysql = require("mysql2");

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,

    ssl: {
        ca: process.env.DB_CA_CERT,
        rejectUnauthorized: true
    }
});

db.connect((err) => {
    if (err) {
        console.error("MySQL connection failed:", err.message);
        process.exit(1);
    }

    console.log("MySQL Connected...");
});

module.exports = db;
