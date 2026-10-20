const mysql = require('mysql2/promise')
const Config = require('./config')

const pool = mysql.createPool({
    host:'localhost',
    user:"root",
    database:'test1',
    password:Config.sqlpassword
})

module.exports = pool