import React from "react";
import { useHistory } from "../Context/HistoryContext";
import { SharedVideoList } from "./SharedVideoList";
import { ClearHistoryBtn } from "./ClearHistoryBtn";

const HistoryVideos = () => {
  const { historyVideo } = useHistory();
  
  return (
    <React.Fragment>
      <SharedVideoList
        videoList={historyVideo}
        message={"Please watch some videos"}
        info={<ClearHistoryBtn />}
        history={true}
      />
    </React.Fragment>
  );
};

export { HistoryVideos };
