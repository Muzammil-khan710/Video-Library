import { createContext, useContext, useState } from 'react';
import axios from 'axios';
import { useVideo } from './VideoContext';

const PlaylistContext = createContext()

const usePLaylist = () => useContext(PlaylistContext)

const PlaylistProvider = ({children}) => {

    const { videoList  } = useVideo()

    const [playlist, setPlaylist] = useState([])
    const [playlistTitle, setPlaylistTitle] = useState("")  
    const [playListVideo, setPlayListVideo] = useState([]);
    const [playlistId, setPlaylistId] = useState("")
    const [singlePlaylist, setSinglePLaylist] = useState([])

    const [openModal, setOpenModal] = useState("none")
    const [currentModalId, setCurrentModalId]= useState(null)

    const createPlaylist = async (pTitle) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.post("/api/user/playlists", { playlist : { title : pTitle } }, config)
            setPlaylist(data.playlists)
            setPlaylistTitle(data.playlist.title)
            setPlaylistTitle("")

        } catch (error) {
            console.log({error})
        }
    }

    const deletePlaylist = async (playlistId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, config)
 
            setPlaylist(data.playlists)

        } catch (error) {
            console.log({error})
        }
    }
   
    const getPlaylistVideo = async (playlistId) => {
        console.log(playlistId)
        setPlaylistId(playlistId)
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }
    
        try {
            const { data } = await axios.get(`/api/user/playlists/${playlistId}`, config)
            setSinglePLaylist(data.playlist)
    
        } catch (error) {
            console.log({error})
        }
    }

    const addVideoToPlaylist = async (_id, playlistId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }
        try {
            const someVid = videoList.find((item) => item._id === _id)
            const {data} = await axios.post(`/api/user/playlists/${playlistId}`, { video : someVid}, config)
            setPlayListVideo(data.playlist)
        
        } catch (error) {
            console.log({error})
        }
    }

    const removeVideoFromPlaylist = async (_id, playlistId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data  } = await axios.delete(`/api/user/playlists/${playlistId}/${_id}`, config)
            
            setPlayListVideo(data.playlist)
            
        } catch (error) {
            console.log({error})
        }
    }

    return(
        <PlaylistContext.Provider value={{createPlaylist, setPlaylist, setPlaylistTitle, playlist, playlistTitle, deletePlaylist, getPlaylistVideo, addVideoToPlaylist, removeVideoFromPlaylist, playListVideo, singlePlaylist, setSinglePLaylist, openModal, setOpenModal, currentModalId, setCurrentModalId, playlistId }}>
            {children}
        </PlaylistContext.Provider>
    )
}

export { PlaylistProvider, usePLaylist }