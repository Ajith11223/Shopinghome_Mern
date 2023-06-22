import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000"})


// auth area
export const signUp = (formData)=> API.post('/auth/sign',formData)
export const LoginUser = (formData)=> API.post('/auth/login',formData)

//google auth
export const googleResponse = (formData)=> API.post('/auth/google',formData)


// Product area
export const ProductCreate = (formData)=> API.post('/product/create',formData)
export const GetAllProduct = ()=> API.get('/product')

// cart createCart

export const createCart = (data)=> API.post('/cart/create',data) 
export const getCartData = ()=> API.get('/cart/get') //
export const removeitem = (data)=> API.post('/cart/delete',data) 
