import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoselect }) => {
  return (
    <div onClick={() => onVideoselect(video)} className="video-item item">
      <img
        className="ui image"
        alt="images"
        src={video.snippet.thumbnails.medium.url}
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
