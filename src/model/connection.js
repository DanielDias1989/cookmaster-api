const mysql = require('mysql2/promise');
const connection = mysql.createPool({
  host: process.env.MYSQLHOST || process.env.MYSQL_HOST,
  port: process.env.MYSQLPORT || process.env.MYSQL_PORT,
  user: process.env.MYSQLUSER || process.env.MYSQL_USER,
  password: process.env.MYSQLPASSWORD
    || process.env.MYSQL_PASSWORD
    || process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQLDATABASE
    || process.env.MYSQL_DATABASE
    || process.env.MYSQL_DATABASE_NAME,
});
module.exports = connection;