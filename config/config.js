import mongoose from 'mongoose';

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://siripawara123:nWMQSKwY4lpHR5Q4@cluster0.pwwie89.mongodb.net/sr").then(()=>console.log("DB Connected"))
}