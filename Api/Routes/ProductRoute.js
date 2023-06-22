import express from 'express';
import { ProductCreate, getAllProduct } from '../Controller/ProductController.js';


const router = express.Router()

router.post('/create',ProductCreate)
router.get('/',getAllProduct)



export default router