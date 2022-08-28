import React from 'react'
import { UserProfile } from '../Assets/AllSvg'

const Header = () => {
  return (

    <div className='flex items-center justify-between  bg-slate-800 text-white p-5 fixed w-full '>
        <div className='italic text-6xl'>MTunes</div>
        <UserProfile/>
    </div>
  )
}

export { Header }