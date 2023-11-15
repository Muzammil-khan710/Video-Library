import { createContext } from 'react';
import { useContext, useEffect } from 'react';
import { useState } from 'react';
import  axios  from 'axios';
import { useVideo } from './VideoContext';
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext';
import toast from 'react-hot-toast';

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
            toast.success('Added to watch later')
        } catch (error) {
            console.log({error})
            toast.error('Error: Unable to add video to watch later')
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
            toast.success('removed from watch later')
        } catch (error) {
            console.log({error})
            toast.error('Error: Unable to remove video from watch later')
        }
    }


    return(
        <WatchLaterContext.Provider value={{ addToWatchLater, watchLaterVideos, removeFromWatchLater, watchLaterToggler}}>
            {children}
        </WatchLaterContext.Provider>
    )
}

export { useWatchLater, WatchLaterProvider }