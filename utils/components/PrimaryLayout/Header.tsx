// import { faDroplet } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PrimaryNav from "../PrimaryNav";
import Logo from "../Logo";

function Header() {
  return (
    <header className="flex flex-col items-center px-8 py-4 md:flex-row md:justify-between">
      <a
        href="/"
        id="logo"
        className="flex items-center gap-2 transition-colors duration-200"
      >
        <Logo />
      </a>
      <PrimaryNav />
    </header>
  );
}

export default Header;
