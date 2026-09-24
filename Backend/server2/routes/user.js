const express = require('express')
const pool = require('../utils/pool')
route = express.Router()

route.get('/',async (req,res)=>{
    sql = 'SELECT * FROM user;'
    data = await pool.query(sql)
    // res.send(data) --> It gave an array contain  the data + buffer
    res.send(data[0])
})

route.post('/signup',async(req,res)=>{
    const{name,mobile,email,pass} = req.body
    sql = 'INSERT INTO USER(name,email,mobile,pass) VALUES(?,?,?,?)'
    data = await pool.query(sql,[name,email,mobile,pass])
    res.send(data[0])
})

route.post('/signin',async(req,res)=>{
    const{email,pass} = req.body
    sql = 'SELECT uid,name,email,mobile FROM user WHERE email = ? and pass = ?'
    data = await pool.query(sql,[email,pass])
    res.send(data[0][0])
})

route.put("/",async(req,res)=>{
    const{uid,mobile} = req.body
    sql = 'UPDATE user SET mobile = ? WHERE uid = ?'
    data = await pool.query(sql,[mobile,uid])
    res.send(data[0])
})

route.delete("/",async(req,res)=>{
    const{uid} = req.body
    sql = 'delete from user WHERE uid = ?'
    data = await pool.query(sql,[uid])
    res.send(data[0])
})



module.exports = route