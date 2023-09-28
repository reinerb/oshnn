// import { faDroplet } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Logo from "../Logo";
import Link from "next/link";
import dynamic from "next/dynamic";

const PrimaryNav = dynamic(() => import("./PrimaryNav"), { ssr: false });

function Header() {
  return (
    <header className="relative flex flex-row items-center justify-between gap-4 px-8 py-4">
      <Link href="/" id="logo" aria-label="home">
        <Logo className="hover:fill-secondary-600 active:fill-secondary-700 dark:hover:fill-secondary-400 dark:active:fill-secondary-300" />
      </Link>
      <PrimaryNav />
    </header>
  );
}

export default Header;
