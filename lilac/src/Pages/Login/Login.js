import React, { useState } from 'react'
import { LoginUser, googleResponse } from '../../ApiCall/Api'
import { Link } from 'react-router-dom'

import { GoogleOAuthProvider } from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';

import { useContext } from 'react';
import AuthContext from '../../Context/AuthContext';



  function Google(){
    const {login,setLogin} =useContext(AuthContext)
  return(
    <>
    <GoogleOAuthProvider clientId="572559618246-c7c7eo18rgj40uvardjue8j5dp6obuer.apps.googleusercontent.com">

      <GoogleLogin
      
      onSuccess={credentialResponse => {
        // responseGoogle(credentialResponse.credential);
      const data = googleResponse(credentialResponse).then((res)=>{
        if(data){
          setLogin(true)
        }
        
        localStorage.setItem("user",JSON.stringify(res.data))
        return res.data
        // setLogedUser(res.data)
      }).catch((err)=>{
        console.log(err)
      })
      
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      />
      </GoogleOAuthProvider>
    </>
  )
}

const Login = () => {

  const {login,setLogin} =useContext(AuthContext)
  // setLogedUser(Google())

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

      if(data?.data?.data){
        setLogin(true)
      }

      localStorage.setItem("user",JSON.stringify(data?.data?.data))
      // setLogedUser(data?.data?.data)
      // setUser(data?.data?.data)
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
        <div className='d-flex align-items-center justify-content-center flex-column' style={{backgroundColor:"white",width:"400px",height:"320px",borderRadius:"10px"}}>

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

            <div className='mt-2'>
            <span >Not Register <Link to={'/sign'}>Sign Up</Link></span>
            </div>
            
            <div className='mt-2 ' style={{textAlign:"end"}}>
            <button className='btn btn-success btn-sm' onClick={handleLogin}>Login</button>
             </div>
           </div>
           <div className='d-flex gap-4'>
            {/* <Link to={'/sign'} >
           <button className='btn btn-info  btn-sm'> Sign Up</button>
            </Link> */}
           {/* <button className='btn btn-primary  btn-sm'> Login with Google</button> */}
           </div>

           <Google/>
       
        </div>
    </div>
  )
}

export default Login