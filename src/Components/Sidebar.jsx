import React from 'react'
import { Link } from "react-router-dom"
import { HistoryIcon, Home, LikeIcon, PlaylistIcon } from '../Assets/AllSvg';
import { WatchLater } from './../Assets/AllSvg';

const Sidebar = () => {
  return (
    <section className='container w-fit px-5 h-screen bg-slate-900 mt-[-4px] sm:mt-4 fixed top-[5.2rem] lg:w-50 text-white'>
        <Link to="/" className='flex items-center my-5'><Home/><span className='hidden sm:block px-2'>Home</span></Link>
        <Link to="/history" className='flex items-center my-5'><HistoryIcon/> <span className='hidden sm:block  px-2'>History</span></Link>
        <Link to="/playlist" className='flex items-center my-5'><PlaylistIcon/> <span className='hidden sm:block  px-2'>Playlist</span></Link>
        <Link to="/liked" className='flex items-center my-5'><LikeIcon/> <span className='hidden sm:block  px-2'>Liked</span></Link>
        <Link to="/watchlater" className='flex items-center my-5'><WatchLater/> <span className='hidden sm:block  px-2'>Watch Later</span></Link>
    </section>
  ) 
}

export { Sidebar }