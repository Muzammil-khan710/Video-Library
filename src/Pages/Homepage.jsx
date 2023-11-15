import React from "react";
import {
  Header,
  PlaylistModal,
  Sidebar,
  VideoListing,
} from "../Components/index";
import { usePLaylist } from "../Context/PlaylistContext";

const Homepage = () => {
  const { currentModalId } = usePLaylist();

  return (
    <>
      <Header />
      <Sidebar />
      <VideoListing />
      <PlaylistModal videoId={currentModalId} />
    </>
  );
};

export { Homepage };
