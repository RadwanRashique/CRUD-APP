const express=require('express')
const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
const mongoose=require('mongoose')
const dbConnect=require('./config/dbConnection')
const userRoute=require('./routes/userRoutes')
dbConnect()
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use('/api',userRoute)


const port=process.env.PORT 
app.listen(port,()=>{
    console.log(`server is running on port ${port} `)
})