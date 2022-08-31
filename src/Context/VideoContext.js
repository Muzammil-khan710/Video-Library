import { createContext, useContext, useState, useEffect } from "react";
import { videos } from "../backend/db/videos";
import axios from "axios";

const VideoContext = createContext()

const useVideo = () => useContext(VideoContext)

const VideoProvider = ({children}) => {

  const [ playerArr, setPlayerArr] = useState([])

  const playerHandler = (_id) => {
    const obj = videos.find((video) => video._id === _id);
    setPlayerArr([obj])
  }

  const [ videoList, setVideoList ] = useState([]);

  useEffect(() => {
    (async () => {
      const {data} = await axios.get("/api/videos");
      setVideoList(data.videos);
    })();
}, [])

    return(
        <VideoContext.Provider value={{playerArr, setPlayerArr, playerHandler, videoList }}>
            {children}
        </VideoContext.Provider>
    )
}

export { useVideo, VideoProvider }