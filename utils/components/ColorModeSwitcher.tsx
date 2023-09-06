"use client";

import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React from "react";

interface Props {
  className?: string;
}

function ColorModeSwitcher(props: Props) {
  const { className } = props;
  const { resolvedTheme, setTheme } = useTheme();

  const toggleTheme = () => {
    resolvedTheme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <FontAwesomeIcon
      icon={resolvedTheme === "dark" ? faMoon : faSun}
      className={`cursor-pointer text-xl text-neutral-950 transition-colors duration-200 hover:text-neutral-800 dark:text-neutral-50 dark:hover:text-neutral-200 ${className}`}
      onClick={toggleTheme}
    />
  );
}

export default ColorModeSwitcher;
