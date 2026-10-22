const express = require('express')
const pool = require('../DB/pool')
const CreateResult = require('../Utils/result')

const route = express.Router()

route.get('/all',async(req,res)=>{
    const sql = "SELECT * FROM PRODUCT"
    try {
        const data = await pool.query(sql)
        user = data[0]
        console.log(user)
        return res.send(CreateResult(user))

    } catch (error) {
        res.send(CreateResult(null,error))
    }
})

route.post('/add',async(req,res)=>{
    const {name,price} = req.body
    
    const sql = "INSERT INTO PRODUCT(name,price) VALUES(?,?)"

    try {
        const data = await pool.query(sql,[name,price])
        console.log(data)
        return res.send(CreateResult(data))

    } catch (error) {
        res.send(CreateResult(null,error))
    }
})

route.put('/update',async(req,res)=>{
    const {pid,price} = req.body
    
    
    const sql = "UPDATE PRODUCT SET price = ? WHERE pid = ?"
    
    try {
        
        const data = await pool.query(sql,[price,pid])
        
        
        return res.send(CreateResult(data))

    } catch (error) {
        console.log("4")
        res.send(CreateResult(null,error))
    }
})

route.post('/delete',async(req,res)=>{
    const {pid} = req.body
    
    
    const sql = "DELETE FROM PRODUCT WHERE pid = ?"
    
    try {
        
        const data = await pool.query(sql,[pid])
        
        
        return res.send(CreateResult(data))

    } catch (error) {
        
        res.send(CreateResult(null,error))
    }
})




module.exports = route