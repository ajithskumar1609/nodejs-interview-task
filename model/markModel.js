import mongoose from "mongoose";

const MarkSchema = new mongoose.Schema({
    id:Number,
    student_id:{
        type:Number,
        ref:'Student'
    },
    mark:Number
})

const Marks = mongoose.model('Marks',MarkSchema);

export default Marks;
