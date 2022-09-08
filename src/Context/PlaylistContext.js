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
    // const [playlistVidFinder, setPlaylistVidFinder ] = useState({})
    const [singlePlaylist, setSinglePLaylist] = useState([])

    const createPlaylist = async (pTitle) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.post("/api/user/playlists", { playlist : { title : pTitle } }, config)
            // console.log(data.playlists)
            console.log('from create playlist' ,data)
            setPlaylist(data.playlists)
            // setPlaylistId(data.playlists._id)
            // console.log(data.playlists.playlist._id)
            setPlaylistTitle(data.playlist.title)
            setPlaylistTitle("")

        } catch (error) {
            console.log({error})
        }
    }

    // console.log(playlist)
    // console.log(playlistTitle)
    // console.log(playlistId)

    const deletePlaylist = async (playlistId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, config)
            // console.log('reaching')
            setPlaylist(data.playlists)
            // console.log(data)
            // console.log(data.playlists)
        } catch (error) {
            console.log({error})
        }
    }
   
    const getPlaylistVideo = async (playlistId) => {
        console.log(playlistId)
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }
            // console.log(id)
        try {
            const { data } = await axios.get(`/api/user/playlists/${playlistId}`, config)
            // console.log(data.playlist)
            console.log(data)
            setSinglePLaylist(data.playlist)
            console.log('from single', data)
            console.log(singlePlaylist)
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

        // console.log(_id)
        // console.log(playlistId)

        try {
            const someVid = videoList.find((item) => item._id === _id)
            const {data} = await axios.post(`/api/user/playlists/${playlistId}`, { video : someVid}, config)
            console.log('from add' ,data)
            console.log(data.playlist)
            // console.log(data.playlist)
            // console.log(' reaching')
            setPlayListVideo(data.playlist)
            // setPlayListVideo(data.playlist.videos)
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
            console.log('from remove' ,data)
            setPlayListVideo(data.playlist)
            console.log(data)
        } catch (error) {
            console.log({error})
        }
    }

    // console.log(playlists)

    // console.log(playListVideo)

    return(
        <PlaylistContext.Provider value={{createPlaylist, setPlaylist, setPlaylistTitle, playlist, playlistTitle, deletePlaylist, getPlaylistVideo, addVideoToPlaylist, removeVideoFromPlaylist, playListVideo, playlistId, singlePlaylist, setSinglePLaylist }}>
            {children}
        </PlaylistContext.Provider>
    )
}

export { PlaylistProvider, usePLaylist }