import React from 'react'
import { videos } from './../backend/db/videos';
import { LikeIcon, PlaylistIcon, WatchLater } from './../Assets/AllSvg';

const Main = () => {
  return (
    <div className='container  flex flex-wrap gap-4 p-2 mt-[6rem] ml-28 sm:ml-40 md:ml-44'>
        {videos.map(({_id, title, image, description, views, date, creator}) => {
            return(
                <div className='border p-5 m-3 bg-slate-400 rounded-md w-72' key={_id}>
                    <img className='h-40 w-full rounded-md' src={image} alt="" />
                    <div className='text-2xl'>{title}</div> 
                    <div className='font-medium'>{creator}</div>
                    <div className='flex gap-2 justify-between '>{views} views <span>{date}</span> </div>
                    <div className='flex justify-around mt-2'>
                        <button><LikeIcon/></button>
                        <button><PlaylistIcon/></button>
                        <button><WatchLater/></button>
                    </div>

                    {/* <iframe
                    src={`https://www.youtube.com/embed/${_id}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className='youtube-iframe'
                /> */}
                </div>
            )
        })}
    </div>
  )
}

export { Main }