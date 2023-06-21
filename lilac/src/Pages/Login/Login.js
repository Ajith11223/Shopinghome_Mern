import React, { useState } from 'react'
import { LoginUser } from '../../ApiCall/Api'

const Login = ({setLogedUser}) => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const [err,setErr]=useState({})


//login
const handleLogin =async()=>{
  try {
    const logData ={
      "email":email,
      "password":password
    }
    if(email.length != 0 && password.length != 0){
      const data= await LoginUser(logData)
      localStorage.setItem("user",JSON.stringify(data?.data?.data))
      setLogedUser(data?.data?.data)
    }else{
      setErr({message:"Please fill field"})
    }
  } catch (error) {
    setErr(error.response.data)
    console.log(error.response.data)
  }

 
}



  return (
    <div  className='bg-secondary d-flex align-items-center justify-content-center ' style={{height:"100vh"}}>
        <div className='d-flex align-items-center justify-content-center flex-column' style={{backgroundColor:"white",width:"500px",height:"280px",borderRadius:"10px"}}>

           <div style={{textAlign:"center",color:"black"}} className=''>
           <h3>Login</h3>
           </div>

           <div>
           <div style={{width:"350px"}}>
                <label htmlFor="">Email</label>
                <input type="text"  value={email} onChange={(ev)=> setEmail(ev.target.value)} className='form-control' />
            </div>
            <div >
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(ev)=> setPassword(ev.target.value)}  className='form-control' />
            </div>
            {
              err ? <span style={{color:"red"}}>{err.message}</span> :""
            }
            
            <div className='mt-2 ' style={{textAlign:"end"}}>
            <button className='btn btn-success btn-sm' onClick={handleLogin}>Login</button>
             </div>
           </div>
           <div className='d-flex gap-4'>
           <button className='btn btn-info  btn-sm'> Sign Up</button>
           <button className='btn btn-primary  btn-sm'> Login with Google</button>
           </div>


       
        </div>
    </div>
  )
}

export default Login