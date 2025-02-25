"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import React from "react";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased  dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={frontendTechnologies}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={backendTechnologies}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

// Frontend Technologies
const frontendTechnologies = [
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/378440/nextjs-fill.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg",
  },
  {
    imageURL: "https://bestofjs.org/logos/zod.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/bootstrap-colored.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/figma-colored.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/452228/html-5.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/452185/css-3.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
  },
];

// Backend Technologies & Tools
const backendTechnologies = [
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/330398/express.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg",
  },
  {
    imageURL:
      "https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/webpack-colored.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/448266/aws.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/354202/postman-icon.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/349342/docker.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/331488/mongodb.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/373595/firebase.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/354420/swagger.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/353935/jira.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/452102/slack.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/512317/github-142.svg",
  },
  {
    imageURL: "https://files.svgcdn.io/tabler/brand-github-copilot.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/373778/light-pnpm.svg",
  },
  {
    imageURL: "https://www.svgrepo.com/show/354512/vercel.svg",
  },
];
