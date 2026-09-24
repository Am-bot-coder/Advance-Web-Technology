const express = require('express')
route = express.Router()

route.get('/user',(req,res)=>{
    res.send("route get works")
})

route.post('/user',(req,res)=>{
    data = req.body
    res.send(body)
})



module.exports = route