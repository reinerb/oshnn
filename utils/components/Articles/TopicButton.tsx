import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  children: React.ReactNode;
  inverted?: boolean;
  className?: string;
};

function TopicButton({ href, children, inverted, className }: Props) {
  const invertedStyles =
    "bg-primary-500 text-neutral-50 hover:bg-primary-600 active:bg-primary-700 dark:hover:bg-primary-400 dark:active:bg-primary-300 hover:text-neutral-50 active:text-neutral-50 dark:hover:text-neutral-50 dark:active:text-neutral-50";
  const normalStyles =
    "border border-primary-500 hover:border-primary-600 active:border-primary-700 dark:hover:border-primary-400 dark:active:border-primary-300";

  return (
    <Link
      href={href}
      className={`rounded-md px-2 py-1 text-sm ${
        inverted ? invertedStyles : normalStyles
      }`}
    >
      {children}
    </Link>
  );
}

export default TopicButton;
