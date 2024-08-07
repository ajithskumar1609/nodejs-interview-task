import Marks from "../model/markModel.js";

const marksData = 
    [
        {
            "id": 5824,
            "student_id": 1,
            "mark": 85
        },
        {
            "id": 9371,
            "student_id": 2,
            "mark": 78
        },
        {
            "id": 4362,
            "student_id": 3,
            "mark": 92
        },
        {
            "id": 2539,
            "student_id": 4,
            "mark": 74
        },
        {
            "id": 6801,
            "student_id": 5,
            "mark": 88
        },
        {
            "id": 1745,
            "student_id": 6,
            "mark": 67
        },
        {
            "id": 5296,
            "student_id": 7,
            "mark": 91
        },
        {
            "id": 8930,
            "student_id": 8,
            "mark": 82
        },
        {
            "id": 3012,
            "student_id": 9,
            "mark": 76
        },
        {
            "id": 4578,
            "student_id": 10,
            "mark": 95
        }
    
]


export const createMarks = async (req,res) => {
    try{
        const marks = await Marks.create(marksData);

        res.status(201).json({
            status:'Success',
            data:{
                marks:marks
            }
        })
    }catch(err){
        res.status(500).json({
            status:'Fail',
            message:err.message,
            err
        })
    }
}

export const getAllMarks = async(req,res) => {
    try{

        const marks = await Marks.find();

        res.status(200).json({
            status:'Success',
            data:{
                marks:marks
            }
        })

    }catch(err){
        res.status(500).json({
            status:'Fail',
            message:err.message,
            err
        })
    }
}