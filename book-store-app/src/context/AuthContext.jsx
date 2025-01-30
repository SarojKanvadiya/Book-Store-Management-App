import React, { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();
const AuthContextProvider = ({children}) => {

    const [isAuthenticated, setAuthenticated] = useState( 
        localStorage.getItem("token")?true:false
    );
    const [token, setToken] = useState(null);
    const navigate = useNavigate();

    const login =(authToken)=>{
        setAuthenticated(true);
        setToken(authToken);
        navigate("/")
        localStorage.setItem("token",token)
    }
    const logout =()=>{
        setAuthenticated(false);
        setToken(null);
        navigate("/login")
        localStorage.removeItem("token")
    }
  return (
    <div>
      <AuthContext.Provider value={{isAuthenticated,login,logout}}>
       {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider
