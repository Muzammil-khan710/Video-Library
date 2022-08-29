import React, {useState} from 'react'
import { Header, Sidebar } from '../Components'
import { useParams, Link } from 'react-router-dom';
import { videos } from './../backend/db/videos';
import { LikeIcon, PlaylistIcon, WatchLater } from '../Assets/AllSvg';
import { useVideo } from '../Context/VideoContext';

const PlayerPage = () => {

  const {videoid} = useParams()

 const { playerArr, playerHandler} = useVideo()

  return (
    <div>
        <Header/>
        <div className='flex flex-wrap'>
            <Sidebar/>
            
            <div className='mt-[9rem] ml-[5rem] sm:ml-[12rem] bg-slate-400 h-[43rem] w-[53rem] rounded'>
                <iframe 
                    width="850" height="498"                    
                    src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded youtube"
                    className='youtube-iframe '
                />
               
                {playerArr.map(({title, description,views, date, createor}) => {
                    return(
                        <div className='p-[1rem]'>
                            <div className='text-2xl'>{title}</div>
                            <div>{description}</div>
                            <div>{views}</div>
                            <div className='flex justify-left gap-[3rem] mt-2'>
                                <button><LikeIcon/></button>
                                <button><PlaylistIcon/></button>
                                <button><WatchLater/></button>
                            </div>
                        </div>
                    )
                })}
               
            </div>

            <div className=''>
                <div className='ml-[4rem] mt-[9rem] '>
                {videos.map(({_id, title, image, description, views, date, creator}) => {
                    return(
                    <div className='border p-5 m-3 bg-slate-400 rounded-md w-72' key={_id}>
                    <Link to={`/player/${_id}`} onClick={() =>playerHandler(_id)}>
                    <img className='h-40 w-full rounded-md' src={image} alt="" />
                    <div className='text-2xl'>{title}</div> 
                    <div className='font-medium'>{creator}</div>
                    <div className='flex gap-2 justify-between '>{views} views <span>{date}</span> </div>
                    </Link>
                    <div className='flex justify-around mt-2'>
                        <button><LikeIcon/></button>
                        <button><PlaylistIcon/></button>
                        <button><WatchLater/></button>
                    </div>
                </div>
            )
        })}
                </div>
            </div>
        </div>
    </div>
  )
}

export { PlayerPage }