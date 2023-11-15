import React from "react";
import { VideoCard } from "./VideoCard";

const SharedVideoList = ({ videoList, message, info, history=false, playlist=false, playlistId }) => {
  return (
    <React.Fragment>
      {videoList.length > 0 ? (
        <section className="flex flex-wrap gap-4 p-2 mt-24 ml-16 sm:ml-40 md:ml-44 justify-around md:justify-start">
          {info}
          {videoList.map((data) => {
            return <VideoCard data={data} key={data._id} history={history} playlist={playlist} playlistId={playlistId}/>;
          })}
        </section>
      ) : (
        <h1 className="flex items-center justify-center w-full h-[100vh] text-white text-2xl">
          {message}
        </h1>
      )}
    </React.Fragment>
  );
};

export { SharedVideoList };
