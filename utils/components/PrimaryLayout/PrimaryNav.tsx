"use client";

import React, { useState } from "react";
import { useWindowSize } from "@uidotdev/usehooks";
import ColorModeSwitcher from "../ColorModeSwitcher";
import { twMerge } from "tailwind-merge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";

type NavLink = {
  name: string;
  href: string;
};

const links: NavLink[] = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Newsletter",
    href: "/newsletter",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

function PrimaryNav() {
  const { width } = useWindowSize();
  const [active, setActive] = useState(false);

  const mdNav = (
    <div className="flex items-center gap-4">
      <nav>
        <ul className="flex flex-row items-center gap-4 font-semibold">
          {links.map(({ name, href }) => (
            <li key={href}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </nav>
      <ColorModeSwitcher />
    </div>
  );

  const xsNav = (
    <>
      <button
        className="self-start text-2xl text-neutral-950 transition-colors duration-200 hover:text-neutral-800 active:text-neutral-700 dark:text-neutral-50 dark:hover:text-neutral-200 dark:active:text-neutral-300"
        aria-label="Open navigation"
        onClick={() => setActive(true)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div
        aria-hidden
        className={twMerge(
          "fixed left-0 top-0 h-screen w-screen bg-neutral-950 bg-opacity-50 transition-opacity duration-200",
          active ? "opacity-100" : "pointer-events-none opacity-0",
        )}
        onClick={() => setActive(false)}
      />
      <div
        className={twMerge(
          "fixed right-0 top-0 z-50 flex h-screen flex-col gap-4 bg-neutral-200 px-8 py-4 transition-transform duration-200 dark:bg-neutral-800",
          active ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex justify-between">
          <ColorModeSwitcher className="text-lg" />
          <button
            aria-label="Close navigation"
            onClick={() => setActive(false)}
          >
            <FontAwesomeIcon icon={faX} className="text-lg" />
          </button>
        </div>
        <ul className="flex flex-col items-center gap-2">
          {links.map(({ name, href }) => (
            <li key={href}>
              <a href={href}>{name}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );

  return width && width >= 768 ? mdNav : xsNav;
}

export default PrimaryNav;
