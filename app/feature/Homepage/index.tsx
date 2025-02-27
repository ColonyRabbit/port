import React from "react";
import { BackgroundBeamsWithCollisionDemo } from "./components/BackgroundBeamsWithCollisionDemo";
import { TimelineDemo } from "./components/TimeLineDemo";
import { SendEmail } from "./components/SendEmail";

const IndexHomepage = () => {
  console.log(process.env.NEXT_PUBLIC_SERVICE_ID);
  return (
    <div className="flex flex-col w-screen ">
      <BackgroundBeamsWithCollisionDemo />
      <TimelineDemo />
      <SendEmail />
    </div>
  );
};

export default IndexHomepage;
