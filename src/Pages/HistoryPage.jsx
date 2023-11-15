import React from "react";
import { Header, HistoryVideos, PlaylistModal, Sidebar } from "../Components";
import { usePLaylist } from "../Context/PlaylistContext";

const HistoryPage = () => {
  const { currentModalId } = usePLaylist();

  return (
    <>
      <Header />
      <Sidebar />
      <HistoryVideos />
      <PlaylistModal videoId={currentModalId} />
    </>
  );
};

export { HistoryPage };
