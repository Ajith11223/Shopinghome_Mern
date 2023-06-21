import express from 'express';
import { loginUser, registerUser } from '../Controller/AuthController.js';


const router = express.Router();

router.post('/sign',registerUser)
router.post('/login',loginUser)

export default router;