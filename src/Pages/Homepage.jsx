import React from 'react'
import { Header } from '../Components/Header'
import { Main } from '../Components/Main'
import Sidebar from '../Components/Sidebar'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <div className='flex'>
            <Sidebar/>
            <Main/>
        </div>
    </div>
  )
}

export { Homepage }