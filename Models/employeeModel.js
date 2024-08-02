import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({ 
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true
    },
    birthday:{
        type:Date,
        default:"",
        required:true
    },
    email:{
        type:String,
        default:""
    },
    address:{
        type:String,
        default:""
    },
    phonenumber:{
        type:Number,
        default:""
    },
    qualification:{
        type:String,
        default:""
    },
    passportnumber:{
        type:String,
        default:""
    },
    citizen:{
        type:String,
        default:""
    },
    religion:{
        type:String,
        default:""
    },
    videolink:{
        type:String,
        default:""
    },
    application:{
        type:String,
        default:""
    },
    passport:{
        type:String,
        default:""
    },
    profilepicture:{
        type:String,
        default:""
    },
})

const employeeModel = mongoose.models.employee || mongoose.model("employee",employeeSchema)

export default employeeModel;