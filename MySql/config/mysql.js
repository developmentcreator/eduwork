const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1997',
    database: 'eduwork-cruds'
});

module.exports = connection;