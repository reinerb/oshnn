import Link from "next/link";
import React from "react";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  className?: string;
}

function LinkButton(linkButtonProps: LinkButtonProps) {
  const { children, className, ...props } = linkButtonProps;

  return (
    <Link {...props} className={`link-button ${className}`}>
      {children}
    </Link>
  );
}

export default LinkButton;
