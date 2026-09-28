const express = require('express')
const result = require('../utils/result')
const pool = require('../utils/pool')
const bcrypt = require('bcrypt')
const config = require('../utils/config')
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
    const hashpassword = await bcrypt.hash(pass,config.saltround)
    const sql = 'INSERT INTO user(name,email,mobile,pass) VALUES(?,?,?,?)'
    try {
        data = await pool.query(sql,[name,email,mobile,hashpassword])
        user = result.successResult(data[0])
        res.send(user)
    } catch (error) {
        res.send(result.errorResult(error))
    }
})

route.post('/signin',async(req,res)=>{
    const{email,pass} = req.body
    const sql = 'SELECT * FROM user WHERE email = ?'
    
    try {
        
        const data = await pool.query(sql,[email])
        const user = data[0][0]
        if(!user){
            return res.send(result.errorResult("Email Invalid"))
        }
        const ispass = await bcrypt.compare(pass,user.pass)
        if(ispass){
            delete user.pass
            res.send(result.successResult(user))
        }else{
            return res.send(result.errorResult("Invalid Password"))
        }
        
        
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