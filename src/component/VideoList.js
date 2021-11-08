import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoselect }) => {
  const renderedLit = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoselect={onVideoselect}
        video={video}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedLit}</div>;
};

export default VideoList;
