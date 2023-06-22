
import UserModel from "../Models/UserModel.js"
import bcrypt from 'bcrypt';
import dontenv from 'dotenv'

dontenv.config()

import {OAuth2Client} from 'google-auth-library'
const client = new OAuth2Client(process.env.GOOGLE_ID);




export const registerUser = async (req, res) => {


    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(req.body.password, salt)
    req.body.password = hashedPass

    const newUser = new UserModel(req.body)
    const { email } = req.body

    try {

        const oldUser = await UserModel.findOne({ email })
        if (oldUser) {
            return res.status(400).json({ message: "email is already registerd" })
        }
        const user = await newUser.save();
        
        res.status(200).json({ user })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }


}

export const loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {
        const user = await UserModel.findOne({ email: email})

        if (user) {
            const validity = await bcrypt.compare(password, user.password)

            if (!validity) {
                res.status(400).json({message:"Wrong password"})
            } else {
                
                const {email,name}=user
                const data ={
                    email,name
                }
                res.status(200).json({ data,message:"success"})

            }

        } else {
            res.json({message:"User Does not exists"})
           
        }
    } catch (error) {
        res.status(500).json({ message: error.message })

    }
   
}

export const GoogleAuth = async (req, res) => {
    // console.log(req.body.credential) 
    
    async function verify() {
        const ticket = await client.verifyIdToken({
            idToken: req.body.credential,
            audience: process.env.GOOGLE_ID,  // Specify the CLIENT_ID of the app that accesses the backend
            // Or, if multiple clients access the backend:
            //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
        });
        const payload = ticket.getPayload();
        const userid = payload['sub'];
        
        const {email,name,sub} = payload

        var userdata ={
            email,
            name,
            "password":userid
        }

        const oldUser = await UserModel.findOne({ email })
       
        if(oldUser !=null ){
            console.log(oldUser,"old")
            res.status(200).json(oldUser)
        }else{
            try {
                const create = await UserModel.create(userdata)
                // const user = await newUser.save() 
                console.log(create,"created")
            res.status(201).json(user)
            } catch (error) {
                res.status(500).json(error)
            }
        }

      }
      verify().catch(console.error);


}