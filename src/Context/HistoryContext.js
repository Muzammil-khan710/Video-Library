import { createContext, useContext, useState  } from 'react';
import  axios  from 'axios';
import { useVideo } from './VideoContext';

const HistoryContext = createContext()

const useHistory = () => useContext(HistoryContext)

const HistoryProvider = ({children}) => {

    const [historyVideo, setHistoryVideo] = useState([])

    const { videoList } = useVideo()
   
    const addToHistory = async (_id) => {
        const encodedToken = localStorage.getItem("token")
        const config  = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const vid = videoList.find((vidFind) => vidFind._id === _id)
            const { data } = await axios.post("/api/user/history", {video : vid }, config)
            setHistoryVideo(data.history)

        } catch (error) {
            console.log({error})
        }
    }

    const removeFromHistory = async (_id) => {
        const encodedToken = localStorage.getItem("token")
        const config  = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete(`/api/user/history/${_id}`,  config)
            setHistoryVideo(data.history)

        } catch (error) {
            console.log({error})
        }
    }

    const removeAllHistory = async () => {
        const encodedToken = localStorage.getItem("token")
        const config  = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete("/api/user/history/all", config)
            setHistoryVideo(data.history)
        } catch (error) {
            console.log({error})
        }
    }

    return(
        <HistoryContext.Provider value={{ addToHistory, historyVideo, removeFromHistory, removeAllHistory }}>
            {children}
        </HistoryContext.Provider>
    )
}

export { HistoryProvider, useHistory }