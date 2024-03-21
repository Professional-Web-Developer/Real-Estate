const express=require('express')
const mongoose=require("mongoose")
const dotenv=require('dotenv').config()
const authcontroller=require('./controller/authController')
const propertycontroller=require('./controller/propertyController')
const uploadcontroller=require('./controller/uploadController')
const cors=require('cors')
const app=express()


//mongodb connect
mongoose.set('strictQuery',false)
mongoose.connect(process.env.MONGO_URL)
app.use('/image',express.static('public/images'))
//routes and middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use("/auth",authcontroller)
app.use("/property",propertycontroller)
app.use("/upload",uploadcontroller)

app.listen(process.env.PORT,()=>{
    console.log("Server has been started successfully")
})