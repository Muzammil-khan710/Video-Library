import React from 'react'
import { PlaylistRemove } from '../Assets/AllSvg'
import { Header, Sidebar } from '../Components/index'
import { usePLaylist } from '../Context/PlaylistContext'

const PlaylistPage = () => {

  const { playlist, deletePlaylist } = usePLaylist()

  return (
    <div>
    <Header/>
    <div className='flex'>
    <Sidebar/>
    <div className='container  flex flex-col flex-wrap gap-4 p-2 mt-[6rem] ml-28 sm:ml-40 md:ml-44'>
        <div className='text-white self-center '>Playlist page</div>
        <div className='flex gap-[2rem] justify-start'>
        {playlist.map(({_id, videos, title }) => {
          return(
          <div className=' bg-slate-400 px-[2rem] py-[1rem] flex gap-[2rem] rounded-lg justify-around ' key={_id}>
            <button>{title}</button>
            <button onClick={() => deletePlaylist(_id) }><PlaylistRemove/></button>
          </div>
        )})}
        </div>
    </div>
    </div>
</div>
  )
}

export { PlaylistPage }