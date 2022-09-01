import React from "react";
import { Header, Sidebar } from "../Components";
import { useParams, Link } from "react-router-dom";
import { videos } from "./../backend/db/videos";
import { LikeFill, LikeIcon, PlaylistIcon, WatchLater, WatchLaterFill } from "../Assets/AllSvg";
import { useVideo } from "../Context/VideoContext";
import { useLike } from "../Context/LikeContext";
import { useWatchLater } from "../Context/WatchlaterContext";

const PlayerPage = () => {
  const { videoid } = useParams();
  const {likeToggler, likeVid} = useLike()
  const { playerArr, playerHandler} = useVideo();
  const {  watchLaterVideos, watchLaterToggler } = useWatchLater()
  const encodedToken = localStorage.getItem("token")

  return (
    <div>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />

        <div className="mt-[9rem] ml-[5rem] sm:ml-[12rem] bg-slate-400 h-[43rem] w-[53rem] rounded">
          <iframe
            width="850"
            height="498"
            src={`https://www.youtube.com/embed/${videoid}?autoplay=1`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            className="youtube-iframe "
          />

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

        <div className="">
          <div className="ml-[4rem] mt-[9rem] ">
            {videos.map(
              ({ _id, title, image, description, views, date, creator }) => {
                return (
                  <div
                    className="border p-5 m-3 bg-slate-400 rounded-md w-72"
                    key={_id}
                  >
                    <Link
                      to={`/player/${_id}`}
                      onClick={() => playerHandler(_id)}
                    >
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
                      <button>
                        <LikeIcon />
                      </button>
                      <button>
                        <PlaylistIcon />
                      </button>
                      <button>
                        <WatchLater />
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export { PlayerPage };
