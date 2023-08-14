import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import React from "react";

interface Props {
  className?: string;
}

function ColorModeSwitcher(props: Props) {
  const { className } = props;
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark");
  };

  return (
    <FontAwesomeIcon
      icon={theme === "dark" ? faMoon : faSun}
      className={`${className}`}
      onClick={toggleTheme}
    />
  );
}

export default ColorModeSwitcher;
