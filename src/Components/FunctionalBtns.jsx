import React from "react";
import {
  LikeFill,
  LikeIcon,
  PlaylistIcon,
  WatchLater,
  WatchLaterFill,
} from "../Assets/AllSvg";
import { useLike } from "../Context/LikeContext";
import { useWatchLater } from "../Context/WatchlaterContext";
import { usePLaylist } from "../Context/PlaylistContext";

const FunctionalBtns = ({ IsVideo, className }) => {
  const { likeToggler, likeVid } = useLike();
  const { watchLaterVideos, watchLaterToggler } = useWatchLater();
  const encodedToken = localStorage.getItem("token");
  const { setOpenModal, setCurrentModalId } = usePLaylist();

  return (
    <div className={className}>
      <button onClick={() => likeToggler(IsVideo._id)}>
        {encodedToken ? (
          likeVid.find((item) => item._id === IsVideo._id) ? (
            <LikeFill />
          ) : (
            <LikeIcon />
          )
        ) : (
          <LikeIcon />
        )}
      </button>
      <button
        onClick={() => {
          setOpenModal("block");
          setCurrentModalId(IsVideo._id);
        }}
      >
        <PlaylistIcon />
      </button>
      <button onClick={() => watchLaterToggler(IsVideo._id)}>
        {encodedToken ? (
          watchLaterVideos.find((item) => item._id === IsVideo._id) ? (
            <WatchLaterFill />
          ) : (
            <WatchLater />
          )
        ) : (
          <WatchLater />
        )}
      </button>
    </div>
  );
};

export { FunctionalBtns };
