"use client";
import React, { useEffect, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { ToggleTheme } from "./ToggleTheme";
import { useTheme } from "next-themes";
import { CiClock1 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { RiContactsFill } from "react-icons/ri";
import { FaHourglassStart } from "react-icons/fa";
import Link from "next/link";
import { SlEnvolopeLetter } from "react-icons/sl";

export function Header() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2 " />

      <div className="flex ml-auto"></div>
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // อัปเดตทุกวินาที

    return () => clearInterval(interval); // ล้าง interval เมื่อ component ถูก unmount
  }, []);
  return (
    <div
      className={cn(
        "fixed top-10 inset-x-0  mx-auto z-50 text-4xl drop-shadow-xl flex items-center justify-between  ",
        className
      )}
    >
      <p className="flex gap-4 items-center text-3xl  max-sm:text-xs bg-white dark:bg-neutral-950 p-2 rounded-3xl max-lg:hidden">
        {time.toLocaleTimeString()}
        <CiClock1 />
      </p>
      <Menu
        className=" flex  items-center w-1/2 justify-around max-lg:w-full max-lg:px-2"
        setActive={setActive}
      >
        <div className="flex items-center gap-1 max-lg:text-2xl max-sm:text-xs">
          <Link className="flex items-center" href="/">
            {" "}
            <IoHomeOutline />
            <MenuItem setActive={setActive} active={active} item="Home">
              {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="/branding">Branding</HoveredLink>
          </div> */}
            </MenuItem>
          </Link>
        </div>
        <div className="flex items-center gap-1 max-lg:text-2xl max-sm:text-xs">
          <RiContactsFill />

          <Link className="max-lg:text-2xl max-sm:text-xs" href="about">
            About me
          </Link>
        </div>
        <div className="flex items-center gap-1 max-lg:text-2xl max-sm:text-xs">
          <SlEnvolopeLetter />
          <MenuItem setActive={setActive} active={active} item="Contact">
            <div className="  text-sm grid grid-cols-2 gap-10 p-4 max-lg:grid-cols-1">
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
            </div>
          </MenuItem>
        </div>
        <div className="flex items-center gap-1 max-lg:text-2xl max-sm:text-xs">
          {" "}
          <FaHourglassStart />
          <MenuItem setActive={setActive} active={active} item="Experience">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink scroll={true} href="/#Experience">
                Experience
              </HoveredLink>
              {/* <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink> */}
            </div>
          </MenuItem>
        </div>
      </Menu>
      <div className="flex items-center gap-4 max-lg:hidden">
        <ToggleTheme />
      </div>
    </div>
  );
}
