const mysql = require('mysql2/promise') 
const config = require('../Config/config')


const pool = mysql.createPool({
    host:'localhost',
    user:"root",
    database:"test1",
    password: config.sqlPassword
})

module.exports = pool