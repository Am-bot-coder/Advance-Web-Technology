const express = require('express')
const cors = require('cors')

const config = require('./config/config')
const productRoute = require('./Routes/productRoutes')

app = express()


app.use(cors())



app.use(express.json())

app.use('/product',productRoute)



app.listen(config.PORT,'localhost',()=>{
    console.log("Server started at PORT " + config.PORT)
})