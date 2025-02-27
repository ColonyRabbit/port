import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { TimelineDemo } from "./components/TimeLineDemo";
import { SendEmail } from "./components/SendEmail";

const IndexHomepage = () => {
  return (
    <div className="flex flex-col w-screen ">
      <BackgroundBeamsWithCollisionDemo />
      <TimelineDemo />
      <SendEmail />
    </div>
  );
};

export default IndexHomepage;
