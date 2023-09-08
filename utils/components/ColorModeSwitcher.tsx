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
    <button
      className={twMerge(
        "cursor-pointer text-xl text-neutral-950 transition-colors duration-200 hover:text-neutral-800 active:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-200 dark:active:text-neutral-300",
        className,
      )}
      onClick={toggleTheme}
      aria-label="toggle dark mode"
    >
      <FontAwesomeIcon icon={resolvedTheme === "dark" ? faMoon : faSun} />
    </button>
  );
}

export default ColorModeSwitcher;
