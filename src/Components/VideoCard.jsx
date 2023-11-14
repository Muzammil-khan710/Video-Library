import React from "react";
import { Link } from "react-router-dom";
import { useLike } from "../Context/LikeContext";
import { useWatchLater } from "../Context/WatchlaterContext";
import { useHistory } from "../Context/HistoryContext";
import { usePLaylist } from "../Context/PlaylistContext";
import {
  LikeFill,
  LikeIcon,
  PlaylistIcon,
  WatchLater,
  WatchLaterFill,
} from "../Assets/AllSvg";

const VideoCard = ({ data }) => {
  const { likeVid, likeToggler } = useLike();
  const { watchLaterVideos, watchLaterToggler } = useWatchLater();
  const { addToHistory } = useHistory();
  const userFromLocal = localStorage.getItem("user");
  const { setOpenModal, setCurrentModalId } = usePLaylist();
  return (
    <div className="border p-5 m-3 bg-slate-400 rounded-md w-72 static">
      <Link
        to={`/player/${data._id}`}
        onClick={() => {
          addToHistory(data._id);
        }}
      >
        <img className="h-40 w-full rounded-md" src={data.image} alt={data.title} />
        <h2 className="text-2xl">{data.title}</h2>
        <h5 className="font-medium">{data.creator}</h5>
        <div className="flex gap-2 justify-between ">
          <span>{data.views} views</span> <span>{data.date}</span>{" "}
        </div>
      </Link>
      <div className="flex justify-between mt-2">
        <button onClick={() => likeToggler(data._id)}>
          {userFromLocal ? (
            likeVid.find((item) => item._id === data._id) ? (
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
            setCurrentModalId(data._id);
          }}
        >
          <PlaylistIcon />
        </button>

        <button onClick={() => watchLaterToggler(data._id)}>
          {userFromLocal ? (
            watchLaterVideos.find((item) => item._id === data._id) ? (
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
};

export { VideoCard }
