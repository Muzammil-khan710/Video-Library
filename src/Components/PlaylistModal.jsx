import React from "react";
import { usePLaylist } from "../Context/PlaylistContext";

const PlaylistModal = ({ videoId }) => {
  const {
    createPlaylist,
    setPlaylistTitle,
    playlist,
    playlistTitle,
    addVideoToPlaylist,
  } = usePLaylist();

  const { openModal, setOpenModal } = usePLaylist();

  return (
    <div
      className="fixed top-[15rem] left-[40%] right-auto w-[20rem] z-20"
      style={{ display: openModal }}
    >
      <div className="bg-slate-800 p-[2rem] flex flex-col gap-4  border-sky-500">
        <button
          className="self-end text-white absolute top-1 bg-slate-700 right-1 px-2 rounded-md"
          onClick={() => setOpenModal("none")}
        >
          {" "}
          X
        </button>
        <div className="mt-3">
          <input
            type="text"
            className="w-[10rem] rounded-md outline-none pl-2"
            onChange={(e) => setPlaylistTitle(e.target.value)}
          />
          <button
            className="text-white ml-3 border-sky-100 border-1 rounded-md bg-slate-700 w-[5rem]"
            onClick={() => createPlaylist(playlistTitle)}
          >
            Create
          </button>
        </div>
        <div className="text-white flex flex-wrap">
          Playlist :{" "}
          {playlist.map((item) => {
            return (
              <div className="flex gap-4 " key={item._id}>
                {" "}
                <button
                  onClick={() => { addVideoToPlaylist(videoId, item._id); setOpenModal("none") }}
                  className=" border-sky-100 bg-slate-700 rounded-md px-3 ml-2 mb-3"
                >
                  {item.title}
                </button>{" "}
              </div>
            );
          })}{" "}
        </div>
      </div>
    </div>
  );
};

export { PlaylistModal };
