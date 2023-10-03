import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type FacebookProps = {
  className?: string;
};

function Facebook({ className }: FacebookProps) {
  return (
    <Link
      className={className}
      href="https://www.facebook.com/profile.php?id=61551441412737"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Find us on Facebook"
    >
      <FontAwesomeIcon icon={faFacebookF} />
    </Link>
  );
}

export default Facebook;
