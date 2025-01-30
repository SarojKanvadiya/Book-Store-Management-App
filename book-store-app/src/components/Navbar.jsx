import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import '../App.css'
import { AuthContext } from '../context/AuthContext'
const Navbar = () => {
     const {isAuthenticated, logout} = useContext(AuthContext)
     const navigate = useNavigate()
     const handleLogout =()=>{
        logout()
     }
  return (
    <nav className='navbar'>
      <NavLink to='/' className='nav-link'>Home</NavLink>
      <NavLink to='/books' className='nav-link'>Book</NavLink>
      {isAuthenticated? <button onClick={handleLogout}>Logout</button>:<button onClick={()=>navigate('/login')}>Login</button>}
      {/* <NavLink to='/login' className='nav-link'>Login</NavLink> */}
    </nav>
  )
}

export default Navbar
