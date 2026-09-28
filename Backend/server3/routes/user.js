const express = require('express')
const result = require('../utils/result')
const pool = require('../utils/pool')
route = express.Router()

route.get('/',async (req,res)=>{
    const sql = 'SELECT * FROM user;'
    try {
        data = await pool.query(sql)
        user = result.successResult(data[0])
        res.send(user)
    } catch (error) {
        res.send(result.errorResult(error))
    }
})

route.post('/signup',async(req,res)=>{
    const{name,mobile,email,pass} = req.body
    const sql = 'INSERT INTO user(name,email,mobile,pass) VALUES(?,?,?,?)'
    try {
        data = await pool.query(sql,[name,email,mobile,pass])
        user = result.successResult(data[0])
        res.send(user)
    } catch (error) {
        res.send(result.errorResult(error))
    }
})

route.post('/signin',async(req,res)=>{
    const{email,pass} = req.body
    const sql = 'SELECT uid,name,email,mobile FROM user WHERE email = ? and pass = ?'
    try {
        data = await pool.query(sql,[email,pass])
        user = result.createResult(data[0][0],"Invalid credentials")
        res.send(user)
    } catch (error) {
        res.send(result.errorResult(error))
    }
})

route.put("/",async(req,res)=>{
    const{uid,mobile} = req.body
    sql = 'UPDATE user SET mobile = ? WHERE uid = ?'
    try {
        data = await pool.query(sql,[mobile,uid])
        user = result.successResult(data[0])
        res.send(user)
    }catch (error) {
        res.send(result.errorResult(error))
    }
})

route.delete("/",async(req,res)=>{
    const{uid} = req.body
    const sql = 'delete from user WHERE uid = ?'
    try{
        data = await pool.query(sql,[uid])
        user = result.successResult(data[0])
        res.send(user)
    }
    catch(error){
        res.send(result.errorResult(error))
    }
})



module.exports = route