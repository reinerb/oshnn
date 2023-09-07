// import { faDroplet } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PrimaryNav from "./PrimaryNav";
import Logo from "../Logo";
import Link from "next/link";
import ColorModeSwitcher from "../ColorModeSwitcher";

function Header() {
  return (
    <header className="relative flex flex-col items-center gap-4 px-8 py-4 md:flex-row md:justify-between">
      <Link href="/" id="logo" aria-label="home">
        <Logo className="hover:fill-secondary-600 active:fill-secondary-700 dark:hover:fill-secondary-400 dark:active:fill-secondary-300" />
      </Link>
      <div className="flex items-center gap-4">
        <PrimaryNav />
        <ColorModeSwitcher />
      </div>
    </header>
  );
}

export default Header;
