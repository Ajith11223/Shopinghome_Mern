import React, { useState } from 'react'
import {createContext,useEffect} from 'react'

const AuthContext = createContext();


export default AuthContext;

export const AuthProvider=({children})=>{
    const [login,setLogin]=useState(false)

    const contextData = {
        login,setLogin
    }
    return (
        <AuthContext.Provider value={contextData}>
       {children}
        </AuthContext.Provider>
    )
}


