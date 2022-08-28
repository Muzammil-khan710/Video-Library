import React from 'react'
import { Header, Main, Sidebar } from "../Components/index"

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