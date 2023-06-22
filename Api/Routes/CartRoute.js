import express from 'express'
import { CartCreate, deleteCart, getAllCart } from '../Controller/CartController.js'

const router = express.Router()

router.post('/create',CartCreate)
router.get('/get',getAllCart)
router.post('/delete',deleteCart)

export default router