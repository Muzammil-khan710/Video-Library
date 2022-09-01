import { createContext } from 'react';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import  axios  from 'axios';
import { useVideo } from './VideoContext';
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';

const WatchLaterContext = createContext()

const useWatchLater = () => useContext(WatchLaterContext)

const WatchLaterProvider = ({children}) => {

    const [watchLaterVideos, setWatchLaterVideos] = useState([])

    const { videoList } = useVideo()

    const { user } = useAuth()

    const userFromLocal = localStorage.getItem("user")

    useEffect(() => {
        if(user) {
            setWatchLaterVideos(user.watchlater)
        } else {
            setWatchLaterVideos([])
        }
    }, [user])

    const navigate = useNavigate()

    const watchLaterToggler = (_id) => {
        (userFromLocal) ? (
        watchLaterVideos.find((item) => item._id === _id)
        ?  removeFromWatchLater(_id)  
        :  addToWatchLater(_id) 
        ) : ( navigate('/login')  )
      }

    const addToWatchLater = async (_id) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const vid = videoList.find((vidfind) => vidfind._id === _id);
            const { data } = await axios.post("/api/user/watchlater", { video : vid }, config)
            setWatchLaterVideos(data.watchlater)
        } catch (error) {
            console.log({error})
        }
    }

    const removeFromWatchLater = async (_id) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete(`/api/user/watchlater/${_id}`,  config)
            setWatchLaterVideos(data.watchlater)
        } catch (error) {
            console.log({error})
        }
    }


    return(
        <WatchLaterContext.Provider value={{ addToWatchLater, watchLaterVideos, removeFromWatchLater, watchLaterToggler}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

export { useWatchLater, WatchLaterProvider }