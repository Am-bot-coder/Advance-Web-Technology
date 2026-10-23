const express = require('express')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const pool = require('../Database/pool')
const { ErrorResult, SuccessResult } = require('../Utils/result')
const config = require('../Config/config')

const route = express.Router()

route.get('/all',async(req,res)=>{
    const sql = 'SELECT * FROM USER'
    try {
        const data = await pool.query(sql)
        const user = data[0]
        res.send(SuccessResult(user))
    } catch (error) {
        res.send(ErrorResult(error))
    }
})

route.post('/signup',async(req,res)=>{
    const {name,email,mobile,pass} = req.body
    const sql = "INSERT INTO USER VALUES(?,?,?,?)"

    try {
        const hashpassword = await bcrypt.hash(pass,config.saltRound)
        const data = await pool.query(sql,[name,email,mobile,hashpassword])
        const user = data        
        res.send(SuccessResult(user)) 

    } catch (error) {
        res.send(ErrorResult(error))
    }
})

route.post('/signin',async(req,res)=>{
    const {email,pass} = req.body
    const sql = "SELECT * FROM USER WHERE email = ?"
    
    try {
        const data = await pool.query(sql,[email])
        
        const user = data[0][0]
        if(!user){
           return res.send(ErrorResult("Email not Found"))
        }
        console.log(user)
        const ispass = await bcrypt.compare(pass,user.pass)
        if(ispass){
            payload = {}
            payload.email = email
           const token = await jwt.sign(payload,config.KEY) 
           delete user.pass
           user.token = token

           return res.send(SuccessResult(user))
        }
        res.send(ErrorResult("Invalid password"))
        

    } catch (error) {
        res.send(ErrorResult(error))
    }
})

module.exports = route