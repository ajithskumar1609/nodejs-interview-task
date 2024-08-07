import Students from '../model/studentModel.js'
import Marks from "../model/markModel.js"

export const homePage = async (req,res) => {

    const studentsMarks = await Students.aggregate([
        {
            $lookup:{
                from:"marks",
                localField:"student_id",
                foreignField:"student_id",
                as:"marks_info"
            }
        },
        {
            $unwind: "$marks_info"
        },
        {
            $project:{
                _id:0,
                student_id:1,
                name:1,
                address:1,
                mark:"$marks_info.mark"
            }
        }
    ]) 

    console.log(studentsMarks);

    res.status(200).render('studentsMark',{
        studentsMarks
    });
}