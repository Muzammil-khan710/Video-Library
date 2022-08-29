import React from 'react'
import { Header, Sidebar } from '../Components'

const HistoryPage = () => {
  return (
    <div>
        <Header/>
        <div className='flex'>
        <Sidebar/>
        <div className='container  flex flex-col flex-wrap gap-4 p-2 mt-[6rem] ml-28 sm:ml-40 md:ml-44'>
            <div className='text-white self-center '>History page</div>
        </div>
        </div>
    </div>
  )
}

export { HistoryPage }