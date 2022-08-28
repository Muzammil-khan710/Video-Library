import React from 'react'
import { UserProfile } from '../Assets/AllSvg'

const Header = () => {
  return (

    <div className='flex items-center justify-between bg-gradient-to-r from-slate-900 to-slate-600 text-white p-5 fixed w-full float'>
        <div className='italic text-6xl'>MTunes</div>
        <div className='flex justify-between items-center gap-2'>
            <UserProfile/>
            <button className='bg-[#334756] px-5 py-2 rounded-md hover:bg-slate-500 active:bg-slate-400'>Login</button>

        </div>
    </div>
  )
}

export { Header }