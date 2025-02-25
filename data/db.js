const {  HOST_DB_SQL, USER_DB_SQL, PSW_DB_SQL,NAME_DB_SQL }= process.env
const mysql = require('mysql2');
const connection = mysql.createConnection({
host: HOST_DB_SQL,
user: USER_DB_SQL,
password: PSW_DB_SQL,
database: NAME_DB_SQL
});
connection.connect((err) => {
if (err) throw err;
console.log('Connected to MySQL!');
});
module.exports = connection;