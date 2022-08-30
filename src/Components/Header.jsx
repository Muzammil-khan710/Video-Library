import React from 'react'
import { UserProfile } from '../Assets/AllSvg'
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext'

const Header = () => {
 
  const { logout, user } = useAuth()

  const navigate = useNavigate();

  const logoutHandler = () => {
    logout();
    navigate("/");
}

  return (

    <div className='flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-600 text-white p-5 fixed w-full float'>
        <div className='italic text-6xl'>MTunes</div>
        <div className='flex justify-between items-center gap-2'>
            <UserProfile/>
            <div>{user ? `Hello! ${user.firstName}` : ""}</div>
            {!user ? 
            <Link to='/login' className='bg-[#334756] px-5 py-2 rounded-md hover:bg-slate-500 active:bg-slate-400'>Login</Link>
            :
            <button  className='bg-[#334756] px-5 py-2 rounded-md hover:bg-slate-500 active:bg-slate-400'onClick={logoutHandler}>logout</button>
}
        </div>
    </div>
  )
}

export { Header }