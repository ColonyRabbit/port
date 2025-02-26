import { FlipWords } from "@/components/ui/flip-words";
import React from "react";

export function FlipWordsDemo() {
  const words = [
    "My Name is khanakorn .",
    "You can call me beer for short .",
    "Nice to meet you .",
    "Hope you have a nice day .",
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-white dark:text-neutral-400 ">
        <FlipWords words={words} /> <br />
      </div>
    </div>
  );
}
