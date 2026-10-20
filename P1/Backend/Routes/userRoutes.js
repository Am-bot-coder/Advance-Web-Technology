const express = require('express')
const route = express.Router()

route.get('/',(req,res)=>{
    console.log()
})

route.post('/signin',(req,res)=>{
    const{email,pass} = req.body
    console.log(email)
    console.log(pass)
})

route.post('/signup',(req,res)=>{
    console.log("Signup Logic")
})

module.exports = route

