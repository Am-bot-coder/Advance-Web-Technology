const express = require("express")
const Config = require("./Utils/config")
const port = Config.port
const cors  = require('cors')

const userRoute = require('./Routes/userRoutes')

app = express()
app.use(cors({
    origin:"http://localhost:5173",
    method:['GET','POST','PUT','DELETE'],
    credentials:true
}))

app.use(express.json()) // always need when you need to display or put data in form of object
app.use('/user',userRoute)

app.listen(port,'localhost',()=>{
    console.log(`server start at port ${port} `)
})