import express from 'express';
import { GoogleAuth, loginUser, registerUser } from '../Controller/AuthController.js';


const router = express.Router();

router.post('/sign',registerUser)
router.post('/login',loginUser)

//google
router.post('/google',GoogleAuth)



export default router;