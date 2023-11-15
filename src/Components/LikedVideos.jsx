import React from "react";
import { SharedVideoList } from "./SharedVideoList";
import { useLike } from "../Context/LikeContext";

const LikedVideos = () => {
  const { likeVid } = useLike();
  return (
    <React.Fragment>
      <SharedVideoList
        videoList={likeVid}
        message={"Please like some vidoes!"}
      />
    </React.Fragment>
  );
};

export { LikedVideos };
