import React from "react";
import { Header, PlaylistModal, Sidebar } from "../Components";
import { useLike } from "../Context/LikeContext";
import { Link } from "react-router-dom";
import { LikeFill, LikeIcon, PlaylistIcon, WatchLater, WatchLaterFill } from "../Assets/AllSvg";
import { useWatchLater } from "../Context/WatchlaterContext";
import { usePLaylist } from "../Context/PlaylistContext";

const LikedPage = () => {
  
  const { likeVid, likeToggler } = useLike();

  const { watchLaterToggler, watchLaterVideos  } = useWatchLater()

  const { currentModalId } = usePLaylist()

  const {  setOpenModal, setCurrentModalId } = usePLaylist()

  return (
    <>
      <Header />
      <div className="flex">
        <Sidebar />
        {likeVid.length > 0 ?
        <section className="container  flex  flex-wrap gap-4 p-2 mt-[6rem] ml-28 sm:ml-40 md:ml-44">
          {likeVid.map(({ title, date, views, creator, image, _id }) => {
            return (
              <div
                className="border p-5 m-3 bg-slate-400 rounded-md w-72"
                key={_id}
              >
                <Link to={`/player/${_id}`}>
                  <img className="h-40 w-full rounded-md" src={image} alt="" />
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
                  <button onClick={() => { setOpenModal("block") ; setCurrentModalId(_id); }}>
                    <PlaylistIcon />
                  </button>
                  <button onClick={() => watchLaterToggler(_id)}>
                  {watchLaterVideos.find((item) => item._id === _id) ? ( <WatchLaterFill /> ) : ( <WatchLater />) }
                </button>
                </div>
              </div>
            );
          })}
        </section>
         : <h1 className="flex items-center justify-center w-full h-[100vh] text-white text-xl">Please like some vidoes!</h1>}
      </div>
      <PlaylistModal className='' videoId={currentModalId}/>
    </>
  );
};

export { LikedPage };
