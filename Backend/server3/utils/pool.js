const mysql2 = require('mysql2/promise')
const config = require('./config')

pool = mysql2.createPool({
    host:'localhost',
    user:'root',
    database:'server',
    password:config.sqlpassword
})

module.exports = pool