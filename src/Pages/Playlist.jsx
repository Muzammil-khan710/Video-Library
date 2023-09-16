import React from "react";
import { PlaylistRemove } from "../Assets/AllSvg";
import { Header, Sidebar } from "../Components/index";
import { usePLaylist } from "../Context/PlaylistContext";
import { Link } from "react-router-dom";
import { useLike } from "../Context/LikeContext";
import { useWatchLater } from "../Context/WatchlaterContext";
import {
  LikeFill,
  LikeIcon,
  WatchLater,
  WatchLaterFill,
} from "../Assets/AllSvg";

const PlaylistPage = () => {
  const {
    playlist,
    deletePlaylist,
    getPlaylistVideo,
    singlePlaylist,
    removeVideoFromPlaylist,
    playlistId,
  } = usePLaylist();

  const { likeVid, likeToggler } = useLike();

  const { watchLaterToggler, watchLaterVideos } = useWatchLater();

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        {playlist.length > 0 ? (
          <div className="container  flex flex-col flex-wrap gap-4 p-2 mt-[6rem] ml-28 sm:ml-40 md:ml-44">
            <div className="flex gap-[2rem] justify-start">
              {playlist.map(({ _id, title }) => {
                return (
                  <div
                    className=" bg-slate-400 px-[2rem] py-[1rem] flex gap-[2rem] rounded-lg justify-around "
                    key={_id}
                  >
                    <button onClick={() => getPlaylistVideo(_id)}>
                      {title}
                    </button>
                    <button onClick={() => deletePlaylist(_id)}>
                      <PlaylistRemove />
                    </button>
                  </div>
                );
              })}
            </div>
            <div className="flex">
              {singlePlaylist?.videos?.length === 0 ? (
                <div className="text-white">Please add videos in playlist</div>
              ) : (
                singlePlaylist?.videos?.map(
                  ({ title, date, views, creator, image, _id }) => {
                    return (
                      <div
                        className="border p-5 m-3 bg-slate-400 rounded-md w-72"
                        key={_id}
                      >
                        <Link to={`/player/${_id}`}>
                          <img
                            className="h-40 w-full rounded-md"
                            src={image}
                            alt=""
                          />
                          <div className="text-2xl">{title}</div>
                          <div className="font-medium">{creator}</div>
                          <div className="flex gap-2 justify-between ">
                            {views} views <span>{date}</span>{" "}
                          </div>
                        </Link>
                        <div className="flex justify-around mt-2">
                          <button onClick={() => likeToggler(_id)}>
                            {likeVid.find((item) => item._id === _id) ? (
                              <LikeFill />
                            ) : (
                              <LikeIcon />
                            )}
                          </button>
                          <button
                            onClick={() =>
                              removeVideoFromPlaylist(_id, playlistId)
                            }
                          >
                            <PlaylistRemove />
                          </button>
                          <button onClick={() => watchLaterToggler(_id)}>
                            {watchLaterVideos.find(
                              (item) => item._id === _id
                            ) ? (
                              <WatchLaterFill />
                            ) : (
                              <WatchLater />
                            )}
                          </button>
                        </div>
                      </div>
                    );
                  }
                )
              )}
            </div>
          </div>
        ) : (
          <h1 className="flex items-center justify-center w-full h-[100vh] text-white text-xl">
            Please add some vidoes in Playlist!
          </h1>
        )}
      </div>
    </>
  );
};

export { PlaylistPage };
