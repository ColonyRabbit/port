import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision>
      <div className="grid grid-cols-2 gap-4">
        {/* left */}
        <div className="relative z-20 md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
          <InfiniteMovingCardsDemo />
        </div>
        {/* right */}
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-2xl text-right relative z-20 md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
            <div className="relative bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-violet-950 to-blue-950">
              Hi, I&apos;m Khanakorn Kositkhongchana
            </div>
            <div className=" mx-auto flex flex-col w-full [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className=" bg-clip-text  flex justify-end items-end   text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                <TypewriterEffect
                  className="flex ml-auto"
                  words={[
                    {
                      text: "A",
                      className: "text-red",
                    },
                    { text: "Junior", className: "text-red" },
                    { text: "Front-End", className: "text-red" },
                    { text: "Developer.", className: "text-red" },
                  ]}
                />
              </div>
            </div>
          </h2>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  );
}
