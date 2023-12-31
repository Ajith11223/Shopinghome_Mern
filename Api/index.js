import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

// routes
import AuthRoute from '../Api/Routes/AuthRoute.js'
import ProductRoute from '../Api/Routes/ProductRoute.js'
import CartRoute from '../Api/Routes/CartRoute.js'


const app = express()

//Middleware
app.use(bodyParser.json({limit:'30mb',extended:true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended:true}));

//cors
app.use(cors())

//env
dotenv.config();

// mongoose
mongoose.connect(process.env.MONGO_DB,{useNewUrlParser:true,useUnifiedTopology:true}).
then(()=> app.listen(process.env.PORT,()=> console.log(`server connectd port: ${process.env.PORT}`))).
catch((error)=> console.log(error))

// auth
app.use('/auth',AuthRoute)
app.use('/auth',AuthRoute)

//product
app.use('/product',ProductRoute)

// cart
app.use('/cart',CartRoute)
