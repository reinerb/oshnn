import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-1 px-8 py-4 text-center text-sm sm:text-base md:flex-row md:gap-2 md:divide-x xl:gap-4">
      <p>Copyright &copy; 2023 OSHNN</p>
      <Link href="/privacy" className="md:pl-2 xl:pl-4">
        Privacy Policy
      </Link>
      <Link href="/disclaimer" className="md:pl-2 xl:pl-4">
        Disclaimer
      </Link>
      <p className="md:pl-2 xl:pl-4">
        Site by{" "}
        <Link href="https://masscommunications.co/">
          Mass Communications Concepts, LLC
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
