const express = require('express')
port = 4000
const userRoute = require('./routes/user')
app = express()

app.use(express.json())
app.use(userRoute)




app.listen(port,'localhost',()=>{
    console.log(`server is start on port ${port}`)
})