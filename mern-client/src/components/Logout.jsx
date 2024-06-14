import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {
    const {logOut}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();

    const from=location.state?.from?.pathname || "/";

    const handleLogout=()=>{
        logOut().then(() => {
            // Sign-out successful.
            alert("Sign-out Successfull!!");
            navigate(from,{replace:true})
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button onClick={handleLogout} className='bg-red-700 px-4 py-2 text-white rounded'>Logout</button>
    </div>
  )
}

export default Logout