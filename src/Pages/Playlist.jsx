import React from 'react'
import { PlaylistRemove } from '../Assets/AllSvg'
import { Header, Sidebar } from '../Components/index'
import { usePLaylist } from '../Context/PlaylistContext'
import { Link } from 'react-router-dom'
import { useVideo } from '../Context/VideoContext'
import { useLike } from '../Context/LikeContext'
import { useWatchLater } from '../Context/WatchlaterContext'
import { LikeFill, LikeIcon, PlaylistIcon, WatchLater, WatchLaterFill } from "../Assets/AllSvg";

const PlaylistPage = () => {

  const { playlist, deletePlaylist,  playListVideo, playlistId,getPlaylistVideo, singlePlaylist, setSinglePLaylist  } = usePLaylist()
  // console.log(singlePlaylist)

  const { playerHandler } = useVideo();

  const { likeVid, likeToggler } = useLike();

  const { watchLaterToggler, watchLaterVideos  } = useWatchLater()

  console.log(singlePlaylist)

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
            {/* <button>{title}</button> */}
            <button onClick={() => getPlaylistVideo(_id) }>check</button>
            <button onClick={() => deletePlaylist(_id) }><PlaylistRemove/></button>
          </div>
        )})}
        </div>
        {singlePlaylist?.videos?.map(({ title, date, views, creator, image, _id }) => {
            return (
              <div
                className="border p-5 m-3 bg-slate-400 rounded-md w-72"
                key={_id}
              >
                <Link to={`/player/${_id}`} onClick={() => playerHandler(_id)}>
                  <img className="h-40 w-full rounded-md" src={image} alt="" />
                  <div className="text-2xl">{title}</div>
                  <div className="font-medium">{creator}</div>
                  <div className="flex gap-2 justify-between ">
                    {views} views <span>{date}</span>{" "}
                  </div>
                </Link>
                <div className="flex justify-around mt-2">
                  <button onClick={() => likeToggler(_id)}>
                    {likeVid.find((item) => item._id === _id) ? (
                      <LikeFill />
                    ) : (
                      <LikeIcon />
                    )}
                  </button>
                  <button>
                    <PlaylistIcon />
                  </button>
                  <button onClick={() => watchLaterToggler(_id)}>
                  {watchLaterVideos.find((item) => item._id === _id) ? ( <WatchLaterFill /> ) : ( <WatchLater />) }
                </button>
                </div>
              </div>
            );
                    
          })}
    </div>
    </div>
</div>
  )
}

export { PlaylistPage }