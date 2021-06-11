const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'panotesttask',
    password: '415625'
});

module.exports = pool.promise();
