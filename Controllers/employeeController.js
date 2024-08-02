import employeeModel from "../Models/employeeModel.js";


const addEmployee = async (req,res)=>{ 
    
    try {
        // let image_filename = `${req.file.filename}`;
        const application = (req.files.application[0].filename)
        const passport = (req.files.passport[0].filename)
        const profilepicture = (req.files.profilepicture[0].filename)
        console.log(application,passport,profilepicture)


        const employee = new employeeModel({
            name:req.body.name,
            age:req.body.age,
            birthday:req.body.birthday,
            email:req.body.email,
            address:req.body.address,
            phonenumber:req.body.phonenumber,
            qualification:req.body.qualification,
            passportnumber:req.body.passportnumber,
            citizen:req.body.citizen,
            religion:req.body.religion,
            videolink:req.body.videolink,
            application,
            passport,
            profilepicture
        })

        await employee.save()
        res.json({success:true,message:"Added successfully"})
        console.log("Added successfully")
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}


const getEmployee = async (req,res)=>{
    try {
        let data = await employeeModel.find({})
        res.json({success:true,data})
        console.log("All data loaded")
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

const deleteEmployee = async (req,res)=>{
    try {
        if(req.body.id){
            const response = await employeeModel.findByIdAndDelete(req.body.id)
            res.json({success:true,messsage:"Delete Succuessfully...",response})
            console.log("Delete Succuessfully...")
        }else{
            throw("no id")
        }
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}
export {addEmployee,getEmployee,deleteEmployee}