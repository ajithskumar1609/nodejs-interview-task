import express from 'express'

import { getAllMarks,createMarks } from '../Controller/markController.js';

const router = express.Router();

router.route('/').get(getAllMarks).post(createMarks);




export default router;