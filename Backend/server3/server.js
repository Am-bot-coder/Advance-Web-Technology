const express = require('express')
port = 4000
const userRoute = require('./routes/user')
const cors = require('cors')

app = express()

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your React app's URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}))

app.use(express.json()) // always need when you need to display or put data in form of object
app.use('/user',userRoute)




app.listen(port,'localhost',()=>{
    console.log(`server is start on port ${port}`)
})