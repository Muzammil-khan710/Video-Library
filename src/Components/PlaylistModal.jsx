import React from "react";
import { usePLaylist } from "../Context/PlaylistContext";
import { CancelIcon } from "../Assets/AllSvg";

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
    <React.Fragment>
      <div
        className="backdrop-blur-sm h-[100vh] w-[100vw] fixed top-0  z-20 "
        style={{ display: openModal }}
      >
        <div className="relative w-[20rem] top-[15rem] left-[40%] right-auto ">
          <div className="bg-slate-800 p-8 flex flex-col gap-4  border-sky-500">
            <button
              className="self-end text-white absolute top-1 right-1 "
              onClick={() => setOpenModal("none")}
            >
              {" "}
              <CancelIcon/>
            </button>
            <div className="mt-3">
              <input
                type="text"
                className="w-[10rem] rounded-md outline-none p-2"
                onChange={(e) => setPlaylistTitle(e.target.value)}
                value={playlistTitle}
              />
              <button
                className="text-white p-2 ml-3 border-sky-100 border-1 rounded-md bg-slate-700 w-[5rem]"
                onClick={() => {
                  createPlaylist(playlistTitle);
                  setPlaylistTitle("");
                }}
              >
                Create
              </button>
            </div>
            <div className="text-white flex flex-col gap-4">
              {playlist.length > 0 && "Add to Playlist :"}
              {playlist.map((item) => {
                return (
                  <div className="flex gap-4 " key={item._id}>
                    {" "}
                    <button
                      onClick={() => {
                        addVideoToPlaylist(videoId, item._id);
                        setOpenModal("none");
                      }}
                      className=" border-sky-100 bg-slate-700 rounded-md p-3 w-full"
                    >
                      {item.title}
                    </button>{" "}
                  </div>
                );
              })}{" "}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export { PlaylistModal };
