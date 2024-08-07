import express from 'express';

import { homePage } from '../Controller/viewController.js';

const router = express.Router();


router.get('/',homePage)

export default router;