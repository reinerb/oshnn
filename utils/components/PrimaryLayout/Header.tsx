// import { faDroplet } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import PrimaryNav from "../PrimaryNav";
import Logo from "../Logo";
import Link from "next/link";

function Header() {
  return (
    <header className="flex flex-col items-center px-8 py-4 md:flex-row md:justify-between">
      <Link href="/" id="logo">
        <Logo className="hover:fill-primary-600 active:fill-primary-700 dark:hover:fill-primary-400 dark:active:fill-primary-300" />
      </Link>
      <PrimaryNav />
    </header>
  );
}

export default Header;
