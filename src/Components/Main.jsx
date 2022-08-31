import React from 'react'
import { Link } from "react-router-dom"
import { LikeFill, LikeIcon, PlaylistIcon, WatchLater } from './../Assets/AllSvg';
import { useVideo } from '../Context/VideoContext';
import { useLike } from '../Context/LikeContext';

const Main = () => {

  const { playerHandler, videoList } = useVideo()

  const { likeVideo, dislikeVideo, likeVid } = useLike()

  const likeToggler = (_id) => {
    likeVid.find((item) => item._id === _id)
    ? dislikeVideo(_id)
    : likeVideo(_id)
  }

  return (
    <div className='container  flex flex-wrap gap-4 p-2 mt-[6rem] ml-28 sm:ml-40 md:ml-44'>
        {videoList.map(({_id, title, image, description, views, date, creator}) => {
            return(
                <div className='border p-5 m-3 bg-slate-400 rounded-md w-72' key={_id}>
                    <Link to={`/player/${_id}`} onClick={() => playerHandler(_id)}>
                    <img className='h-40 w-full rounded-md' src={image} alt="" />
                    <div className='text-2xl'>{title}</div> 
                    <div className='font-medium'>{creator}</div>
                    <div className='flex gap-2 justify-between '>{views} views <span>{date}</span> </div>
                    </Link>
                    <div className='flex justify-around mt-2'>

                        <button onClick={() =>  likeToggler(_id)}>{ likeVid.find((item) => item._id === _id)  ?  ( <LikeFill/> ) : ( <LikeIcon/>  ) }</button>
                        <button><PlaylistIcon/></button>
                        <button><WatchLater/></button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export { Main }