import React from 'react'
import { Header, Main, PlaylistModal, Sidebar } from "../Components/index"
import { usePLaylist } from '../Context/PlaylistContext'

const Homepage = () => {

  const { currentModalId } = usePLaylist()

  return (
    <>
        <Header/>
        <div className='flex'>
            <Sidebar/>
            <Main/>
            <PlaylistModal className='' videoId={currentModalId}/>
        </div>
    </>
  )
}

export { Homepage }