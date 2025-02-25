import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { TimelineDemo } from "./components/TimeLineDemo";

const IndexHomepage = () => {
  return (
    <div className="flex flex-col ">
      <BackgroundBeamsWithCollisionDemo />
      <TimelineDemo />
    </div>
  );
};

export default IndexHomepage;
