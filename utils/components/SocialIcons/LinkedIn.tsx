import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

type LinkedInProps = {
  className?: string;
};

function LinkedIn({ className }: LinkedInProps) {
  return (
    <Link
      className={className}
      href="https://www.linkedin.com/company/oshnn/about/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Find us on LinkedIn"
    >
      <FontAwesomeIcon icon={faLinkedinIn} />
    </Link>
  );
}

export default LinkedIn;
