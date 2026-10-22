const mysql = require('mysql2/promise')
const config = require('../config/config')

const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:config.DB,
    password:config.sqlPassword
})

module.exports = pool