import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const VideoContext = createContext();

const useVideo = () => useContext(VideoContext);

export const useSingleVideo = (videoId) => {
  const { videoList } = useVideo();
  return videoList.find((item) => item._id === videoId);
};

const VideoProvider = ({ children }) => {
  const [playerArr, setPlayerArr] = useState([]);

  const [videoList, setVideoList] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("/api/videos");
      setVideoList(data.videos);
    })();
  }, []);

  return (
    <VideoContext.Provider value={{ playerArr, setPlayerArr, videoList }}>
      {children}
    </VideoContext.Provider>
  );
};

export { useVideo, VideoProvider };
