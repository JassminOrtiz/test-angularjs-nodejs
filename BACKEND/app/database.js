const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: '6142852850Og!',
    database: 'test'
});

const getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
}

module.exports = getConnection;