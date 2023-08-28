import React from "react";
import ColorModeSwitcher from "./ColorModeSwitcher";

function PrimaryNav() {
  return (
    <nav>
      <ul className="flex flex-row items-center gap-4 font-semibold">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
        <li>
          <ColorModeSwitcher />
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;
