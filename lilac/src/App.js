
import Home from "./Pages/Home/Home";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import { useContext, useEffect, useState } from "react";
import AuthContext from "./Context/AuthContext";



function App() {
  const [logedUser,setLogedUser]=useState({})
  const [user,setUser]=useState({})

  const {login,setLogin}=useContext(AuthContext)
  

  

  useEffect(()=>{
setUser(JSON.parse(localStorage.getItem('user')))
  },[])

  if(user){
    setLogin(true)
  }
  return (
    <div className="">
      <BrowserRouter>
      {/* <AuthProvider > */}

      <Routes>
            <Route path='/' element={login ? <Home setLogedUser={setLogedUser}/> : <Login />}/>
            <Route path='/sign' element={login ? <Navigate to={'/'} /> : <Signup/>}/>
            <Route path='/login' element={login ? <Navigate to={'/'} /> : <Login />}/>
        </Routes>
      {/* </AuthProvider> */}
    
      </BrowserRouter>

    </div>
  );
}

export default App;
