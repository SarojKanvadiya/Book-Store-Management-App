import React, { useContext, useState } from 'react'
import axios from 'axios'
import { AuthContext } from '../context/AuthContext';

const Login = () => {
   
    const {login} = useContext(AuthContext)
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState(null)
    
    const handleSubmit =async(e)=>{
       e.preventDefault();
       try {
         const response = await axios.post(`https://glowing-marsh-cantaloupe.glitch.me/login`,{username,password})
          
        if(response.data.token){
            const {token} = response.data
            login(token)
        } 
         console.log(response.data.token)
       } catch (error) {
        console.log(error)
        setError(response.data.message)
       }
    }
if(error) return <p>{error}</p>
  return (
    <div className='form-container'>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enetr Username' onChange={(e)=>setUsername(e.target.value)}/>
        <input type="password" placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <input type="submit" value="Login"/>
      </form>
    </div>
  )
}

export default Login
