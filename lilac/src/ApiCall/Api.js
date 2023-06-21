import axios from 'axios'

const API = axios.create({baseURL: "http://localhost:5000"})

export const signUp = (formData)=> API.post('/auth/sign',formData)
export const LoginUser = (formData)=> API.post('/auth/login',formData)