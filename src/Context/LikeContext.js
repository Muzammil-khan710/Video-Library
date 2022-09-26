import { createContext, useState, useContext, useEffect} from 'react';
import axios from 'axios'
import { useVideo } from './VideoContext';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const LikeContext = createContext()

const useLike = () => useContext(LikeContext)

const LikeProvider = ({children}) => {

    const { user } = useAuth()

    const [likeVid, setLikeVid] = useState([])
 
    const { videoList  } = useVideo()

    const userFromLocal = localStorage.getItem("user")

    useEffect(() => {
        if(user) {
            setLikeVid(user.likes)
        } else {
            setLikeVid([])
        }
    }, [user])

    const navigate = useNavigate()

    const likeToggler = (_id) => {
        (userFromLocal) ? (
        likeVid.find((item) => item._id === _id)
        ?  dislikeVideo(_id)  
        :  likeVideo(_id) 
        ) : ( navigate('/login')  )
      }

    const likeVideo = async (_id) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

       
        try {
            const vid = videoList.find((vidfind) => vidfind._id === _id);
            const  { data } = await axios.post("/api/user/likes", { video :  vid}, config )
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
            const { data } = await axios.delete(`/api/user/likes/${_id}`, config)
            setLikeVid(data.likes)
        } catch (error) {
            console.log({error})
        }
    }

    return(
        <LikeContext.Provider value={{likeVid, likeVideo , dislikeVideo, likeToggler}}>
            {children}
        </LikeContext.Provider>
    )
}

export { useLike , LikeProvider }