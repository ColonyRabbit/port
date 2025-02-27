"use client";
import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { FlipWordsDemo } from "./FlipWordsDemo";
import { useRouter } from "next/navigation";
import { FaMedium } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";

export function BackgroundBeamsDemo() {
  //useRoute
  const route = useRouter();
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-7xl mx-auto p-4 flex flex-col items-center justify-center">
        <h1 className="relative z-10 text-lg md:text-9xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          <FlipWordsDemo />
        </h1>
      </div>
      <BackgroundBeams />
      <div className="flex gap-10 max-md:flex-col">
        <button
          onClick={() => route.push("https://medium.com/@khanakorn01")}
          className="p-[3px] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl" />
          <p className="px-8 py-2 flex items-center gap-2  bg-black rounded-3xl  relative group transition duration-200 text-white hover:bg-transparent">
            Here is my Medium blog <FaMedium />
          </p>
        </button>
        <a href="/CV/cv.pdf" download className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl" />
          <p className="px-8 py-2 flex items-center gap-2  bg-black rounded-3xl  relative group transition duration-200 text-white hover:bg-transparent">
            Here is my CV <SiReaddotcv />
          </p>
        </a>
      </div>
    </div>
  );
}
