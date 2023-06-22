import React, { useState } from 'react'
import { signUp } from '../../ApiCall/Api'
import { Link, useNavigate } from 'react-router-dom';
// import GoogleSignIn from '../../Firebase/Firebase';

const Signup = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [valid,setValid]=useState(false)

  // handleSubmit
  const handleSubmit = async () => {
    setValid(true)
    const dataAll = {
      "name": name,
      "email": email,
      "password": password
    }
    try {

      if(name.length !=0 && email.length !=0 && password.length != 0){
        const { data } = await signUp(dataAll)
        if (data) {
          setValid(false)
          navigate('/login')
        }
      }else{
        alert("Please fill form")
      }
      
    } catch (error) {
console.log("error signup")
    }
  }

  return (
    <div className='bg-secondary d-flex align-items-center justify-content-center ' style={{ height: "100vh" }}>
      <div className='d-flex align-items-center justify-content-center flex-column' style={{ backgroundColor: "white", width: "500px", height: "450px", borderRadius: "10px" }}>

        <div style={{ textAlign: "center", color: "black" }} className=''>
          <h3>Sign Up</h3>
        </div>

        <div>
          <div style={{ width: "350px" }}>
            <label htmlFor="">Name</label>
            <input type="text" value={name} onChange={(ev) => setName(ev.target.value)} className='form-control' />
          </div>
          {
            name.length == 0 && valid ? <span style={{color:"red"}}>Please Enter Name</span> :""
          }
          <div style={{ width: "350px" }}>
            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={(ev) => setEmail(ev.target.value)} className='form-control' />
          </div>
          {
            email.length == 0 && valid ? <span style={{color:"red"}}>Please Enter Email</span> :""
          }
          <div >
            <label htmlFor="">Password</label>
            <input type="password" value={password} onChange={(ev) => setPassword(ev.target.value)} className='form-control' />
          </div>
          {
            password.length == 0 && valid ? <span style={{color:"red"}}>Please Enter Password</span> :""
          }
         <div className='mt-2'>
            <span >Already Register <Link to={'/login'}>Login</Link></span>
            </div>
          <div className='mt-2 ' style={{ textAlign: "end" }}>
            <button className='btn btn-success btn-sm' onClick={handleSubmit}>Sign Up</button>
          </div>
        </div>
        {/* <button className='btn btn-primary'>Sign Up with Google</button> */}
        {/* <GoogleSignIn /> */}

      </div>
    </div>
  )
}

export default Signup