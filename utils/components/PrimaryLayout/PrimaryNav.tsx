import React from "react";

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
          <a href="/newsletter">Newsletter Signup</a>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;
