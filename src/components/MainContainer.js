import React from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div className="col-span-11 py-3">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
