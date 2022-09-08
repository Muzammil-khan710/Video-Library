import React from "react";
import { Link } from "react-router-dom";
import {
  LikeFill,
  LikeIcon,
  PlaylistIcon,
  WatchLater,
  WatchLaterFill,
} from "./../Assets/AllSvg";
import { useVideo } from "../Context/VideoContext";
import { useLike } from "../Context/LikeContext";
import { useWatchLater } from "../Context/WatchlaterContext";
import { usePLaylist } from "../Context/PlaylistContext";
// import { PlaylistModal } from "./PlaylistModal";

const Main = () => {
  const { playerHandler, videoList } = useVideo();

  const { likeVid, likeToggler } = useLike();

  const { watchLaterVideos, watchLaterToggler } = useWatchLater();

  const userFromLocal = localStorage.getItem("user");

  // const { playlistModalState, setPlaylistModalState } = playlistModal()

  const {
    createPlaylist,
    setPlaylist,
    setPlaylistTitle,
    playlist,
    playlistTitle,
    deletePlaylist,
    addVideoToPlaylist,
    removeVideoFromPlaylist,
  } = usePLaylist();

  // console.log(playlist)
  // console.log(playlist._id)
  // console.log(playlist.title)

  return (
    <div className="container  flex flex-wrap gap-4 p-2 mt-[6rem] ml-28 sm:ml-40 md:ml-44 ">
      {videoList.map(({ _id, title, image, views, date, creator }) => {
        return (
          <div
            className="border p-5 m-3 bg-slate-400 rounded-md w-72 static"
            key={_id}
          >
            <Link to={`/player/${_id}`} onClick={() => playerHandler(_id)}>
              <img className="h-40 w-full rounded-md" src={image} alt="" />
              <div className="text-2xl">{title}</div>
              <div className="font-medium">{creator}</div>
              <div className="flex gap-2 justify-between ">
                {views} views <span>{date}</span>{" "}
              </div>
            </Link>
            <div className="flex justify-around mt-2">
              <button onClick={() => likeToggler(_id)}>
                {userFromLocal ? (
                  likeVid.find((item) => item._id === _id) ? (
                    <LikeFill />
                  ) : (
                    <LikeIcon />
                  )
                ) : (
                  <LikeIcon />
                )}
              </button>
              {/* <input type="text" onChange={e => setPlaylistTitle(e.target.value)} /> */}
              {/* <button onClick={() => createPlaylist(playlistTitle)}> */}
              <button>
                <PlaylistIcon />
              </button>
              <div className="absolute bg-slate-800 p-[2rem] mx-auto flex flex-col gap-[1rem]  border-sky-500">
                <div>
                  <input
                    type="text"
                    className="w-[10rem] rounded-md outline-none pl-2"
                    onChange={(e) => setPlaylistTitle(e.target.value)}
                  />
                  <button
                    className="text-white  pl-4"
                    onClick={() => createPlaylist(playlistTitle)}
                  >
                    Create
                  </button>
                </div>
                <div className="text-white">
                  Playlist :{" "}
                  {playlist.map((item) => {
                    return (
                      <div className="flex gap-[1rem]" key={item._id}>
                        {" "}
                        <button
                          onClick={() => addVideoToPlaylist(_id, item._id)}
                          className=""
                        >
                          {item.title}
                        </button>{" "}
                        <button 
                        className="text-white"
                          onClick={() => removeVideoFromPlaylist(_id, item._id)}
                        >
                          remove me
                        </button>{" "}
                      </div>
                      
                    );
                  })}{" "}
                </div>
              </div>
              {/* <button onClick={() => addVideoToPlaylist(_id)}> add vid to playlist</button> */}
              <button onClick={() => watchLaterToggler(_id)}>
                {userFromLocal ? (
                  watchLaterVideos.find((item) => item._id === _id) ? (
                    <WatchLaterFill />
                  ) : (
                    <WatchLater />
                  )
                ) : (
                  <WatchLater />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export { Main };
