import { createContext, useContext, useState } from "react";
import { videos } from "../backend/db/videos";

const VideoContext = createContext()

const useVideo = () => useContext(VideoContext)

const VideoProvider = ({children}) => {

  const [ playerArr, setPlayerArr] = useState([])

  const playerHandler = (_id) => {
    const obj = videos.find((video) => video._id === _id);
    setPlayerArr([obj])
  }

  console.log(playerArr)

    return(
        <VideoContext.Provider value={{playerArr, setPlayerArr, playerHandler }}>
            {children}
        </VideoContext.Provider>
    )
}

export { useVideo, VideoProvider }