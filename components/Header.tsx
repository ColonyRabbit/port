"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ToggleTheme } from "./ToggleTheme";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
      {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
        </p> */}
      {/* <button
        onClick={() => setTheme(!theme)}
        className="flex ml-auto text-4xl drop-shadow-lg"
      >
        {theme ? <p>Light Mode</p> : <p>Dark Mode</p>}
        {theme ? <CiLight /> : <CiDark />}
      </button> */}
      <div className="flex ml-auto">
        <ToggleTheme />
      </div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 text-4xl drop-shadow-xl",
        className
      )}
    >
      <Menu
        className=" flex justify-center items-center w-full"
        setActive={setActive}
      >
        <MenuItem setActive={setActive} active={active} item="Home">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Contact">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              imagesize="max-h-[100px] max-w-[140px]"
              title="Git"
              href="https://github.com/ColonyRabbit"
              src="/git.jpg"
              description="My Git Hub"
            />
            <ProductItem
              imagesize="max-h-[100px] max-w-[140px]"
              title="Gmail"
              href="mailto:khanakorn01@gmail.com"
              src="/gmail.jpg"
              description="My Gmail"
            />
            <ProductItem
              imagesize="max-h-[100px] max-w-[140px]"
              title="Facebook"
              href="https://gomoonbeam.com"
              src="/facebook.jpg"
              description="My Facebook"
            />
            <ProductItem
              imagesize="max-h-[100px] max-w-[140px]"
              title="Medium"
              href="https://medium.com/@khanakorn01"
              src="/medium.jpg"
              description="My Medium"
            />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Experience">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
