"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Selectheme() {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Avoid rendering the component until it is mounted
  if (!mounted) return null;

  // Handle system theme
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative w-auto h-auto max-md:text-4xl md:px-7 md:py-4 border-none flex bg-opacity-0 items-center md:justify-around rounded-3xl max-sm:text-xs bg-white dark:bg-neutral-950"
        >
          <p className="ml-2 max-lg:hidden text-3xl">{theme}</p>
          <Sun
            className={`h-6 w-6 transition-transform duration-300 ${
              currentTheme === "dark"
                ? "-rotate-90 scale-0"
                : "rotate-0 scale-100"
            }`}
          />
          <Moon
            className={`h-6 w-6 transition-transform duration-300 ${
              currentTheme === "dark"
                ? "rotate-0 scale-100"
                : "rotate-90 scale-0"
            }`}
          />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
