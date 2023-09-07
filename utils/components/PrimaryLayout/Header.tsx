// import { faDroplet } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PrimaryNav from "../PrimaryNav";
import Logo from "../Logo";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col items-center px-8 py-4 md:flex-row md:justify-between">
      <Link href="/" id="logo" aria-label="home">
        <Logo className="hover:fill-secondary-600 active:fill-secondary-700 dark:hover:fill-secondary-400 dark:active:fill-secondary-300" />
      </Link>
      <PrimaryNav />
    </header>
  );
}

export default Header;
