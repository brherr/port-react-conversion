import React from "react";
import VideoPlayer from "react-background-video-player";
import VideoBg from "./video/bulbVideo.mp4";
import Header from "./Components/Header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <VideoPlayer
        className="bg-video"
        src={VideoBg}
        autoPlay={true}
        muted={true}
        loop={true}
      />
      <Header />
    </div>
  );
}

export default App;
