
import UserModel from "../Models/UserModel.js"
import bcrypt from 'bcrypt';


export const registerUser = async (req, res) => {
    console.log(req.body)
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