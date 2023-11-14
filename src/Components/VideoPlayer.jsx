import React from "react";
import { useParams } from "react-router-dom";
import { useSingleVideo } from "../Context/VideoContext";
import { FunctionalBtns } from "./FunctionalBtns";

const VideoPlayer = () => {
  const { videoid } = useParams();
  const IsVideo = useSingleVideo(videoid);

  return (
    <section
      className="mt-[7rem] ml-[5rem] sm:ml-[12rem] bg-slate-400 rounded mr-4"
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

      <div className="p-4">
        {IsVideo && (
          <>
            <h1 className="text-2xl">{IsVideo.title}</h1>
            <p>{IsVideo.description}</p>
            <span>{IsVideo.views}</span>
            <FunctionalBtns
              IsVideo={IsVideo}
              className={"flex justify-left gap-[3rem] mt-2"}
            />
          </>
        )}
      </div>
    </section>
  );
};

export { VideoPlayer };
