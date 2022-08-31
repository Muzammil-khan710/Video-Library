import React from 'react'
import { Header, Sidebar } from '../Components'
import { useLike } from '../Context/LikeContext'

const LikedPage = () => {

  const { likeVid } = useLike();
  // console.log( 'length', likeVid.length)

  return (
    <div>
        <Header/>
        <div className='flex'>
        <Sidebar/>
        <div className='container  flex flex-col flex-wrap gap-4 p-2 mt-[6rem] ml-28 sm:ml-40 md:ml-44'>
            <div className='text-white self-center '>Liked page</div>
            {likeVid.map(({title, description, creator, image, _id } ) => {
              return(
                <div key={_id} className='bg-fuchsia-50'>
                  <div>{_id}</div>
                  <div>{title}</div>
                  <div>{description}</div>
                  <div>{creator}</div>
                  <img src={image} alt="" />
                </div>
              )
            })}
        </div>
        </div>
    </div>
  )
}

export { LikedPage }