const express = require('express')
const route = express.Router()
const pool = require('../Utils/pool')
const result = require('../Utils/createRespone')


route.get('/',(req,res)=>{
    console.log()
})

route.post('/signin',async(req,res)=>{
    const{email,pass} = req.body
    const sql = 'SELECT * FROM  USER WHERE email = ?'
    try{
        user = await pool.query(sql,[email])[0][0]

        if(!user){
            return res.send(result.createError("Email Not Found !!"))
        }
        if(pass != user.passwords){
            return res.send(result.createError("Password is Wrong"))
        }
        delete user.passwords
        return res.send(result.createSuccess(user))

    }catch(error){
        res.send(result.createError(error))
    }
    
})

route.post('/signup',async (req,res)=>{
    const {name,email,mobile,pass} = req.body
    const sql = "INSERT INTO USER VALUES(?,?,?,?)"
    const password = Number(pass) 

    try{
        const data = await pool.query(sql,[name,email,mobile,password])[0]
        user = result.createSuccess(data)
        res.send(data)
        
    }catch(error){
        res.send(result.createError(error))
    }
    
})

module.exports = route

