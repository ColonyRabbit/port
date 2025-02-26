import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { InfiniteMovingCardsDemo } from "./InfiniteMovingCardsDemo";

export function BackgroundBeamsWithCollisionDemo() {
  return (
    <BackgroundBeamsWithCollision className="">
      <div className="md:grid md:grid-cols-2 gap-4 max-md:flex max-md:flex-col-reverse">
        {/* left */}
        <div className="relative max-md:py-0 max-md:h-0 z-20 md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight">
          <InfiniteMovingCardsDemo />
        </div>
        {/* right */}
        <div className="flex flex-col justify-center items-center max-md:w-full">
          <h2 className="text-2xl text-right md:relative md:z-20 md:text-4xl lg:text-7xl font-bold text-black dark:text-white font-sans tracking-tight max-md:w-full">
            <div className="md:relative p-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-950 via-violet-950 to-blue-950 dark:bg-gradient-to-r dark:from[#EABDE6] dark:via-[#D69ADE] dark:to-[#AA60C8] ">
              <p className="max-md:text-center">
                Hi, I&apos;m Khanakorn Kositkhongchana
              </p>
            </div>
            <div className="mx-auto flex flex-col w-full [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              <div className="bg-clip-text flex justify-end items-end text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4 max-md:justify-center">
                <TypewriterEffectSmooth
                  className="flex md:ml-auto max-md:items-center"
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
