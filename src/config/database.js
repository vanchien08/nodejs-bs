require('dotenv').config()
const mysql = require('mysql2/promise');
const connection = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,

    port:process.env.DB_PORT,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    // maxIdle: 10,
    // idleTimeout: 60000,
    queueLimit: 0
  });
//   const connection = mysql.createConnection({
//     host:process.env.DB_HOST,
//     user:process.env.DB_USER,

//     port:process.env.DB_PORT,
//     password:process.env.DB_PASSWORD,
//     database:process.env.DB_NAME
  
//   });
  module.exports=connection;
