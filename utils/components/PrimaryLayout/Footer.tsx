"use client";

import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { useWindowSize } from "@uidotdev/usehooks";
import { faFacebookF, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const { width } = useWindowSize();

  const mdFooterLinks = (
    <>
      <ul className="flex flex-row flex-wrap items-center justify-center gap-3 px-8 py-4 text-center text-sm md:flex-nowrap md:gap-2 md:divide-x lg:text-base xl:gap-4">
        <li>
          Copyright <FontAwesomeIcon icon={faCopyright} /> 2023 OSHNN
        </li>
        <li className="text-lg md:pl-2 xl:pl-4">
          <Link href="https://facebook.com/" aria-label="Find us on Facebook">
            <FontAwesomeIcon icon={faFacebookF} />
          </Link>
        </li>
        <li className="text-lg md:pl-2 xl:pl-4">
          <Link href="https://linkedin.com/" aria-label="Find us on LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} />
          </Link>
        </li>
        <li className="md:pl-2 xl:pl-4">
          <Link href="/privacy">Privacy Policy</Link>
        </li>
        <li className="md:pl-2 xl:pl-4">
          <Link href="/disclaimer">Disclaimer</Link>
        </li>
        <li className="md:pl-2 xl:pl-4">
          Site by{" "}
          <Link href="https://masscommunications.co/">
            Mass Communications Concepts, LLC
          </Link>
        </li>
      </ul>
    </>
  );

  const xsFooterLinks = (
    <ul className="flex flex-row flex-wrap items-center justify-center gap-3 px-8 py-4 text-center text-sm md:flex-nowrap md:gap-2 md:divide-x lg:text-base xl:gap-4">
      <li>
        Copyright <FontAwesomeIcon icon={faCopyright} /> 2023 OSHNN
      </li>
      <li className="md:pl-2 xl:pl-4">
        Site by{" "}
        <Link href="https://masscommunications.co/">
          Mass Communications Concepts, LLC
        </Link>
      </li>
    </ul>
  );

  return (
    <footer>{width && width >= 768 ? mdFooterLinks : xsFooterLinks}</footer>
  );
}

export default Footer;
