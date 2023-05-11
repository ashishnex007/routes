const express= require('express')
const app=express()
const port= 1234

const userRoute= require('./routes/user')
const commentRoute= require('./routes/comment')
app.use('/user',userRoute)
app.use('/comment',commentRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})