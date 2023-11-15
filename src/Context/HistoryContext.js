import { createContext, useContext, useState  } from 'react';
import  axios  from 'axios';
import { useVideo } from './VideoContext';
import toast from 'react-hot-toast';

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
            toast.success('Removed video from history')
            
        } catch (error) {
            console.log({error})
            toast.error('Error: Unable to remove video from history at the moment')
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
            toast.success('History cleared successfully')
        } catch (error) {
            console.log({error})
            toast.error('Error: Unable clear history at the moment')
        }
    }

    return(
        <HistoryContext.Provider value={{ addToHistory, historyVideo, removeFromHistory, removeAllHistory }}>
            {children}
        </HistoryContext.Provider>
    )
}

export { HistoryProvider, useHistory }