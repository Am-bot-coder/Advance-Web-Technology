const express = require('express')
const pool = require('../utils/pool')
route = express.Router()

route.get('/user',async (req,res)=>{
    sql = 'SELECT * FROM user;'
    data = await pool.query(sql)
    // res.send(data) --> It gave an array contain  the data + buffer
    res.send(data[0])
})

route.post('/user',(req,res)=>{
    data = req.body
    sql = 'INSERT INTO USER '
})



module.exports = route