import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { TimelineDemo } from "./components/TimeLineDemo";
import { SendEmail } from "./components/SendEmail";

const IndexHomepage = () => {
  return (
    <div className="w-auto">
      <BackgroundBeamsWithCollisionDemo />
      <TimelineDemo />
      <SendEmail />
    </div>
  );
};

export default IndexHomepage;
