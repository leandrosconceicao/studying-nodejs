const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'root',
    password: 'example',
    database: 'example',
})

module.exports = connection