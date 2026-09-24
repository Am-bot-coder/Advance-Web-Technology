const express = require('express')
const pool = require('../utils/pool')
route = express.Router()

route.get('/',async (req,res)=>{
    sql = 'SELECT * FROM product;'
    data = await pool.query(sql)
    // res.send(data) --> It gave an array contain  the data + buffer
    res.send(data[0])
})

route.post('/',async(req,res)=>{
    const{name,price} = req.body
    sql = 'INSERT INTO product(name,price) VALUES(?,?)'
    data = await pool.query(sql,[name,price])
    res.send(data[0])
})

route.put("/",async(req,res)=>{
    const{pid,price} = req.body
    sql = 'UPDATE product SET price = ? WHERE pid = ?'
    data = await pool.query(sql,[price,pid])
    res.send(data[0])
})

route.delete("/",async(req,res)=>{
    const{uid} = req.body
    sql = 'delete from product WHERE pid = ?'
    data = await pool.query(sql,[uid])
    res.send(data[0])
})



module.exports = route