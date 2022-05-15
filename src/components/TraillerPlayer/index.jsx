import React from "react";
import ReactPlayer from "react-player/youtube";

const TraillerPlayer = ({ id }) => {
  const baseURL = "https://www.youtube.com/watch?v=";
  return (
    <ReactPlayer
      controls
      url={baseURL + id}
      playing
      width="100%"
      height="100%"
    />
  );
};

export default TraillerPlayer;
