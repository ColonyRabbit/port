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

export function ToggleTheme() {
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
    <Button
      onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
      variant="outline"
      size="icon"
      className="relative min-w-20 min-h-10 border-none flex bg-opacity-0 items-center md:justify-around rounded-3xl max-sm:text-xs bg-white dark:bg-neutral-950"
    >
      <p className="ml-2 max-lg:hidden text-3xl">{theme}</p>
      <Sun
        className={`h-8 w-8 transition-transform duration-300 ${
          currentTheme === "dark" ? "-rotate-100 scale-0" : "rotate-0 scale-100"
        }`}
      />
      <Moon
        className={`h-8 w-8 transition-transform duration-300 ${
          currentTheme === "dark" ? "rotate-0 scale-100" : "rotate-100 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
