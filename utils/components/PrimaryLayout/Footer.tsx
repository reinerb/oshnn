import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center gap-4 divide-x px-8 py-4">
      <p>Copyright &copy; 2023 OSHNN</p>
      <Link href="/privacy" className="pl-4">
        Privacy Policy
      </Link>
      <Link href="/disclaimer" className="pl-4">
        Disclaimer
      </Link>
      <p className="pl-4">
        Site built by{" "}
        <Link href="https://masscommunications.co/">
          Mass Communications Concepts, LLC
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
