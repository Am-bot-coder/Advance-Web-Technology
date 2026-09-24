const express = require('express')
port = 4000
const userRoute = require('./routes/user')
app = express()

app.use(express.json()) // always need when you need to display or put data in form of object
app.use('/user',userRoute)




app.listen(port,'localhost',()=>{
    console.log(`server is start on port ${port}`)
})