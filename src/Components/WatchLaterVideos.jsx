import React from "react";
import { useWatchLater } from "../Context/WatchlaterContext";
import { SharedVideoList } from "./SharedVideoList";

const WatchLaterVideos = () => {
  const { watchLaterVideos } = useWatchLater();

  return (
    <React.Fragment>
      <SharedVideoList
        videoList={watchLaterVideos}
        message={"Please add some vidoes in watch later"}
      />
    </React.Fragment>
  );
};

export { WatchLaterVideos };
