import React, { useRef, useState, useEffect } from "react";
import VideoFooter from "./components/Footer/VideoFooter";
import VideoSidebar from "./components/sidebar/VideoSidebar";
import VideoHeader from "./components/header/VideoHeader";
import "./video.css";

function Video({ likes, messages, shares, name, description, music, url }) {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);
  
  useEffect(() => {
    function handleScroll() {
      if (play) {
        videoRef.current.pause();
        setPlay(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [play]);

  function handleStart() {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  }

  return (
    <div className="video">
      <label>
        <VideoHeader />
        <video
          className="video__player"
          ref={videoRef}
          onClick={handleStart}
          loop
          src={url}
        ></video>
        <VideoSidebar likes={likes} messages={messages} shares={shares} />
        <VideoFooter name={name} description={description} music={music} />
      </label>
    </div>
  );
}

export default Video;
