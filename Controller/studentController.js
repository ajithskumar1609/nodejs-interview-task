import Students from "../model/studentModel.js"

const studentsData = [
    {
        "student_id": 1,
        "name": "Alice Johnson",
        "address": "123 Maple St, Springfield, IL"
    },
    {
        "student_id": 2,
        "name": "Bob Smith",
        "address": "456 Oak Ave, Chicago, IL"
    },
    {
        "student_id": 3,
        "name": "Carol White",
        "address": "789 Pine Dr, Bloomington, IL"
    },
    {
        "student_id": 4,
        "name": "David Brown",
        "address": "101 Cedar Ln, Peoria, IL"
    },
    {
        "student_id": 5,
        "name": "Eva Green",
        "address": "202 Birch Blvd, Naperville, IL"
    },
    {
        "student_id": 6,
        "name": "Frank Wright",
        "address": "303 Willow Way, Rockford, IL"
    },
    {
        "student_id": 7,
        "name": "Grace Lee",
        "address": "404 Elm St, Aurora, IL"
    },
    {
        "student_id": 8,
        "name": "Henry Young",
        "address": "505 Aspen Ct, Joliet, IL"
    },
    {
        "student_id": 9,
        "name": "Ivy Turner",
        "address": "606 Spruce Rd, Waukegan, IL"
    },
    {
        "student_id": 10,
        "name": "Jack Harris",
        "address": "707 Cypress Ave, Evanston, IL"
    }
]

export const createStudent = async (req,res) => {
    try{

        const students = await Students.create(studentsData)

        res.status(201).json({
            status:'Success',
            data:{
                students:students
            }
        })

    }catch(err){
       res.status(500).json({
         status:'Fail',
         message:err.message,
         err:err.stack
       })

    }
}

export const getAllStudents = async(req,res) => {
    try{

        const students = await Students.find();

        res.status(201).json({
            status:'Success',
            data:{
                students:students
            }
        })

    }catch(err){
       res.status(404).json({
         status:'Fail',
         message:err.message,
         err
       })

    }
}