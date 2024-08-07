import express from 'express'

import { createStudent, getAllStudents } from '../Controller/studentController.js';

const router = express.Router();


router.route('/').get(getAllStudents).post(createStudent)


export default router;