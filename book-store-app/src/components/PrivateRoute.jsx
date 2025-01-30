import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    const {isAuthenticated} = useContext(AuthContext)
    return(
        <div>
            {!isAuthenticated && <Navigate to='/login'/>}
        </div>
    )
}
export default PrivateRoute
