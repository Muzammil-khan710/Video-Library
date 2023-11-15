import React from 'react'
import { DeleteIcon } from '../Assets/AllSvg';

const PlaylistTabs = ({getPlaylistVideo, id, setHidePlaylist, deletePlaylist, title}) => {
  return (
    <div
    className={` bg-slate-400 px-8 py-4 flex gap-8 rounded-lg justify-around m-3 `}
  >
    <button
      className="text-xl"
      onClick={() => { getPlaylistVideo(id); setHidePlaylist(true) }}
    >
      {title}
    </button>
    <button onClick={() => deletePlaylist(id)}>
      <DeleteIcon />
    </button>
  </div>
  )
}

export { PlaylistTabs }