const express = require('express')
const { Config } = require('./Utils/config')
const userRoute = require("./Routes/UserRoutes")


app = express()

app.use(express.json())
app.use('/user',userRoute)

app.listen(Config.PORT,'localhost',()=>{
    console.log(`Server Start on PORT : ${Config.PORT}`)
})