import React, { useEffect, useState } from "react";
import { usePLaylist } from "../Context/PlaylistContext";
import { VideoCard } from "./VideoCard";
import { useLocation } from "react-router-dom";
import { PlaylistTabs } from "./PlaylistTabs";

const PlaylistBox = () => {
  const {
    playlist,
    deletePlaylist,
    getPlaylistVideo,
    singlePlaylist,
    playlistId,
  } = usePLaylist();

  const location = useLocation();

  const [hidePlaylist, setHidePlaylist] = useState(false);

  useEffect(() => {
    setHidePlaylist(false);
  }, [location]);

  return (
    <React.Fragment>
      {playlist.length > 0 ? (
        <section className="flex flex-col  gap-4 p-2 mt-24 ml-28 sm:ml-40 md:ml-44">
          <div className="flex gap-8 justify-start">
            {playlist.map(({ _id, title }) => {
              return (
                <PlaylistTabs
                  id={_id}
                  title={title}
                  deletePlaylist={deletePlaylist}
                  getPlaylistVideo={getPlaylistVideo}
                  setHidePlaylist={setHidePlaylist}
                  key={_id}
                />
              );
            })}
          </div>
          {hidePlaylist &&
            (singlePlaylist?.videos?.length === 0 ? (
              <div className="text-white mx-3">
                Please add videos in the playlist
              </div>
            ) : (
              <div className="flex flex-wrap gap-4 justify-around md:justify-start">
                {singlePlaylist?.videos?.map((data) => (
                  <VideoCard
                    data={data}
                    key={data._id}
                    playlist={true}
                    playlistId={playlistId}
                  />
                ))}
              </div>
            ))}
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
