const express = require('express')
route = express.Router()

route.get('/user',(req,res)=>{
    res.send("route get works")
})

route.post('/user',(req,res)=>{
    data = req.body
    res.send(data)
})



module.exports = route