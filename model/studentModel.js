import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    student_id:Number,
    name:{
        type:String,
        unique:true
    },
    address:{
        type:String
    }
})

const Students = mongoose.model('Students',studentSchema);

export default Students;
