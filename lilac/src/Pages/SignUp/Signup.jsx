import React, { useState } from 'react'
import { signUp } from '../../ApiCall/Api'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
 const navigate =useNavigate()

  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  // handleSubmit
  const handleSubmit =async()=>{
    const dataAll={
      "name":name,
      "email":email,
      "password":password
    }
   const {data} = await signUp(dataAll)
   if(data){
    navigate('/login')
   }
  }
  
  return (
    <div  className='bg-secondary d-flex align-items-center justify-content-center ' style={{height:"100vh"}}>
        <div className='d-flex align-items-center justify-content-center flex-column' style={{backgroundColor:"white",width:"500px",height:"350px",borderRadius:"10px"}}>

           <div style={{textAlign:"center",color:"black"}} className=''>
           <h3>Sign Up</h3>
           </div>

           <div>
           <div style={{width:"350px"}}>
                <label htmlFor="">Name</label>
                <input type="text" value={name} onChange={(ev)=> setName(ev.target.value)}  className='form-control' />
            </div>
           <div style={{width:"350px"}}>
                <label htmlFor="">Email</label>
                <input type="text" value={email} onChange={(ev)=> setEmail(ev.target.value)}   className='form-control' />
            </div>
            <div >
                <label htmlFor="">Password</label>
                <input type="text" value={password} onChange={(ev)=> setPassword(ev.target.value)}   className='form-control' />
            </div>
            <div className='mt-2 ' style={{textAlign:"end"}}>
            <button className='btn btn-success btn-sm' onClick={handleSubmit}>Sign Up</button>
             </div>
           </div>
           <button className='btn btn-primary'>Sign Up with Google</button>

        </div>
    </div>
  )
}

export default Signup