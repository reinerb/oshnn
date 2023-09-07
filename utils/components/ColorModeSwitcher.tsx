"use client";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { twMerge } from "tailwind-merge";

type ColorModeSwitcherProps = {
  className?: string;
};

function ColorModeSwitcher({ className }: ColorModeSwitcherProps) {
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <FontAwesomeIcon
      icon={resolvedTheme === "dark" ? faMoon : faSun}
      className={twMerge(
        "cursor-pointer text-xl text-neutral-950 transition-colors duration-200 hover:text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-200",
        className,
      )}
      onClick={toggleTheme}
    />
  );
}

export default ColorModeSwitcher;
