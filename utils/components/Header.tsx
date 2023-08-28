import { faDroplet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PrimaryNav from "./PrimaryNav";

function Header() {
  return (
    <header className="flex flex-col items-center px-8 py-4 md:flex-row md:justify-between">
      <a href="/" id="logo" className="flex items-center gap-2">
        <FontAwesomeIcon icon={faDroplet} className="text-3xl" />
        <span className="text-4xl font-extrabold">OSHNN</span>
      </a>
      <PrimaryNav />
    </header>
  );
}

export default Header;
