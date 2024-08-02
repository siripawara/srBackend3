import express from 'express';
import { addEmployee ,getEmployee,deleteEmployee} from '../Controllers/employeeController.js';
import multer from "multer";


const employeeRouter = express.Router();
const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`) 
    }
})
const upload = multer({storage:storage})


employeeRouter.post("/add",upload.fields([{ name: 'profilepicture'},{ name: 'application'},{ name: 'passport'}]),addEmployee)
employeeRouter.get("/",getEmployee)
employeeRouter.post("/delete",deleteEmployee) 

export default employeeRouter