import React from "react";
import { useVideo } from "../Context/VideoContext";
import { VideoCard } from "./VideoCard";

const VideoListing = () => {
  const { videoList } = useVideo();

  return (
    <section className="flex flex-wrap gap-4 p-2 mt-[6rem] ml-[4rem] sm:ml-40 md:ml-44 justify-around md:justify-start">
      {videoList.map((data) => {
        return (
          <VideoCard data={data} key={data._id}/>
        );
      })}
    </section>
  );
};

export { VideoListing };
