import React from "react";
import { usePLaylist } from "../Context/PlaylistContext";
import { DeleteIcon } from "../Assets/AllSvg";
import { VideoCard } from "./VideoCard";

const PlaylistBox = () => {
  const {
    playlist,
    deletePlaylist,
    getPlaylistVideo,
    singlePlaylist,
    playlistId,
  } = usePLaylist();

  return (
    <React.Fragment>
      {playlist.length > 0 ? (
        <section className="flex flex-col flex-wrap gap-4 p-2 mt-24 ml-28 sm:ml-40 md:ml-44">
          <div className="flex gap-8 justify-start">
            {playlist.map(({ _id, title }) => {
              return (
                <div
                  className=" bg-slate-400 px-8 py-4 flex gap-8 rounded-lg justify-around m-3"
                  key={_id}
                >
                  <button
                    className="text-xl"
                    onClick={() => getPlaylistVideo(_id)}
                  >
                    {title}
                  </button>
                  <button onClick={() => deletePlaylist(_id)}>
                    <DeleteIcon />
                  </button>
                </div>
              );
            })}
          </div>
          {singlePlaylist?.videos?.length === 0 ? (
            <div className="text-white">Please add videos in playlist</div>
          ) : (
            singlePlaylist?.videos?.map((data) => {
              return (
                <VideoCard
                  data={data}
                  key={data._id}
                  playlist={true}
                  playlistId={playlistId}
                />
              );
            })
          )}
        </section>
      ) : (
        <h1 className="flex items-center justify-center w-full h-[100vh] text-white text-2xl">
          Please add a Playlist!
        </h1>
      )}
    </React.Fragment>
  );
};

export { PlaylistBox };
