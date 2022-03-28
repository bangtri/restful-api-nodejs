let mysql = require('mysql');
let db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    port: process.env.PORT,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});
db.connect();
module.exports = db;