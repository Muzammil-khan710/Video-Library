import React from "react";
import { Header, PlaylistModal, Sidebar } from "../Components";
import { usePLaylist } from "../Context/PlaylistContext";
import { LikedVideos } from "../Components/LikedVideos";

const LikedPage = () => {
  const { currentModalId } = usePLaylist();

  return (
    <>
      <Header />
      <Sidebar />
      <LikedVideos/>
      <PlaylistModal videoId={currentModalId} />
    </>
  );
};

export { LikedPage };
