import React from "react";
import { Header, Sidebar } from "../Components";
import { useParams } from "react-router-dom";
import { LikeFill, LikeIcon, PlaylistIcon, WatchLater, WatchLaterFill } from "../Assets/AllSvg";
import { useVideo } from "../Context/VideoContext";
import { useLike } from "../Context/LikeContext";
import { useWatchLater } from "../Context/WatchlaterContext";

const PlayerPage = () => {
  const { videoid } = useParams();
  const {likeToggler, likeVid} = useLike()
  const { playerArr } = useVideo();
  const {  watchLaterVideos, watchLaterToggler } = useWatchLater()
  const encodedToken = localStorage.getItem("token")

  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />

        <div className="mt-[7rem] ml-[5rem] sm:ml-[12rem] bg-slate-400 w-[100vw] rounded" key={videoid}>
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

          {playerArr.map(
            (video) => {
              const { title, _id, description, views } = video;
              return (
                <div className="p-[1rem]">
                  <div className="text-2xl">{title}</div>
                  <div>{description}</div>
                  <div>{views}</div>
                  <div className="flex justify-left gap-[3rem] mt-2">
                    <button onClick={() => likeToggler(_id)}>
                    { encodedToken ? ( likeVid.find((item) => item._id === _id) ? ( <LikeFill /> ) : ( <LikeIcon />) ) : ( <LikeIcon/>)}
                    </button>
                    <button>
                      <PlaylistIcon />
                    </button>
                    <button onClick={() => watchLaterToggler(_id)}>
                    { encodedToken ? ( watchLaterVideos.find((item) => item._id === _id) ? ( <WatchLaterFill /> ) : ( <WatchLater />) ) : ( <WatchLater/>)}
                    </button>
                  </div>
                </div>
              );
            }
          )}
        </div>

      </div>
    </div>
  );
};

export { PlayerPage };
