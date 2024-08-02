import express from "express"
import cors from "cors"
import dotenv from 'dotenv'
dotenv.config()
import employeeRouter from "./Routers/employeeRouter.js"
import {connectDB} from './config/config.js'
//app config
const app = express()
const port = process.env.PORT|| 4000

//middlewares
app.use(express.json())
app.use(cors())

//db
connectDB();

//routes
app.use("/employee",employeeRouter)
app.use("/images",express.static('uploads'))




app.listen(port,()=>{
    console.log(`Server started on port ${port}`)
})

//mongodb+srv://siripawara123:MMgASMCC9TbzrgHg@cluster0.rgfiqcy.mongodb.net/?