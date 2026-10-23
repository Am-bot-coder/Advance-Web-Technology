const express = require('express')
const cors = require('cors')
const config = require('./Config/config')

const userRoute = require('./Routes/userRoute')

app = express()


app.use(cors({
    origin:"http://localhost:5173",
    methods:['GET','POST','PUT','DELETE'],
    credentials:true
}))


app.use(express.json())
app.use('/user',userRoute)


app.listen(config.PORT,'localhost',()=>{
    console.log("Port Start at PORT "+config.PORT)
})