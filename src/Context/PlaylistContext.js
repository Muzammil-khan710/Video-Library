import { createContext, useContext, useState } from 'react';
import axios from 'axios';

const PlaylistContext = createContext()

const usePLaylist = () => useContext(PlaylistContext)

const PlaylistProvider = ({children}) => {


    const [playlist, setPlaylist] = useState([])
    const [playlistTitle, setPlaylistTitle] = useState("")

    const createPlaylist = async (pTitle) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.post("/api/user/playlists", { playlist : { title : pTitle } }, config)
            console.log(data.playlists)
            console.log(data)
            setPlaylist(data.playlists)
            setPlaylistTitle(data.playlist.title)
            setPlaylistTitle("")

        } catch (error) {
            console.log({error})
        }
    }

    console.log(playlist)
    console.log(playlistTitle)

    const deletePlaylist = async (playlistId) => {
        const encodedToken = localStorage.getItem("token")
        const config = {
            headers : {
                authorization : encodedToken
            }
        }

        try {
            const { data } = await axios.delete(`/api/user/playlists/${playlistId}`, config)
            console.log('reaching')
            setPlaylist(data.playlists)
            console.log(data)
            console.log(data.playlists)
        } catch (error) {
            console.log({error})
        }
    }
   

    return(
        <PlaylistContext.Provider value={{createPlaylist, setPlaylist, setPlaylistTitle, playlist, playlistTitle, deletePlaylist}}>
            {children}
        </PlaylistContext.Provider>
    )
}

export { PlaylistProvider, usePLaylist }