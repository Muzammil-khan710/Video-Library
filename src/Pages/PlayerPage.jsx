import React from "react";
import { Header, Sidebar } from "../Components";
import { useParams } from "react-router-dom";
import {
  LikeFill,
  LikeIcon,
  PlaylistIcon,
  WatchLater,
  WatchLaterFill,
} from "../Assets/AllSvg";
import { useSingleVideo } from "../Context/VideoContext";
import { useLike } from "../Context/LikeContext";
import { useWatchLater } from "../Context/WatchlaterContext";
import { usePLaylist } from "../Context/PlaylistContext";

const PlayerPage = () => {
  const { videoid } = useParams();
  const { likeToggler, likeVid } = useLike();
  const { watchLaterVideos, watchLaterToggler } = useWatchLater();
  const encodedToken = localStorage.getItem("token");
  const IsVideo = useSingleVideo(videoid);
  const {  setOpenModal, setCurrentModalId } = usePLaylist()

  return (
    <>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />

        <section
          className="mt-[7rem] ml-[5rem] sm:ml-[12rem] bg-slate-400 w-[100vw] rounded mr-4"
          key={videoid}
        >
          <div className="overflow-hidden pb-[56.25%] relative">
            <iframe
              width="450"
              height="398"
              src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
              className="youtube-iframe top-0 left-0 absolute w-full h-full"
            />
          </div>

          <div className="p-[1rem]">
            <div className="text-2xl">{IsVideo?.title}</div>
            <div>{IsVideo?.description}</div>
            <div>{IsVideo?.views}</div>
            <div className="flex justify-left gap-[3rem] mt-2">
              <button onClick={() => likeToggler(IsVideo?._id)}>
                {encodedToken ? (
                  likeVid.find((item) => item._id === IsVideo?._id) ? (
                    <LikeFill />
                  ) : (
                    <LikeIcon />
                  )
                ) : (
                  <LikeIcon />
                )}
              </button>
              <button onClick={() => { setOpenModal("block") ; setCurrentModalId(IsVideo?._id); }}>
                <PlaylistIcon />
              </button>
              <button onClick={() => watchLaterToggler(IsVideo?._id)}>
                {encodedToken ? (
                  watchLaterVideos.find((item) => item._id === IsVideo?._id) ? (
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
        </section>
      </div>
    </>
  );
};

export { PlayerPage };
