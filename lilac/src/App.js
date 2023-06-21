
import Home from "./Pages/Home/Home";
import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Login from "./Pages/Login/Login";
import Signup from "./Pages/SignUp/Signup";
import { useEffect, useState } from "react";



function App() {
  const [logedUser,setLogedUser]=useState({})
  const [user,setUser]=useState({})

  useEffect(()=>{
setUser(JSON.parse(localStorage.getItem('user')))
  },[logedUser])
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
            <Route path='/' element={user ? <Home setLogedUser={setLogedUser}/> : <Login setLogedUser={setLogedUser}/>}/>
            <Route path='/sign' element={user ? <Navigate to={'/'} /> : <Signup/>}/>
            <Route path='/login' element={user ? <Navigate to={'/'} /> : <Login setLogedUser={setLogedUser}/>}/>
        </Routes>
    
      </BrowserRouter>

    </div>
  );
}

export default App;
