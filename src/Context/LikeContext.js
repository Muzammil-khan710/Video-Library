import { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios'
import { useVideo } from './VideoContext';

const LikeContext = createContext()

const useLike = () => useContext(LikeContext)

const LikeProvider = ({children}) => {

    const [likeVid, setLikeVid] = useState([])
 
    const { videoList  } = useVideo()

    useEffect(() => {
        (async () => {
          const encodedToken = localStorage.getItem("token");
          const config = { headers: { authorization: encodedToken } };
          const {data} = await axios.get("/api/user/likes", config);
          setLikeVid(data.likes);
        })();
    }, [])

    const likeVideo = async (_id) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }
       
        try {
            const vid = videoList.find((vidfind) => vidfind._id === _id);
            const { data } = await axios.post("/api/user/likes", { video :  vid}, config )
            setLikeVid(data.likes)

        } catch (error) {
            console.log({error})
        }
    }

    const dislikeVideo = async (_id) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete(`api/user/likes/${_id}`, config)
            setLikeVid(data.likes)
        } catch (error) {
            console.log({error})
        }
    }

    return(
        <LikeContext.Provider value={{likeVid, likeVideo , dislikeVideo}}>
            {children}
        </LikeContext.Provider>
    )
}

export { useLike , LikeProvider }