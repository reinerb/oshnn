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
    "bg-blue-500 text-slate-50 hover:bg-blue-600 active:bg-blue-700 dark:hover:bg-blue-400 dark:active:bg-blue-300 hover:text-slate-50 active:text-slate-50 dark:hover:text-slate-50 dark:active:text-slate-50";
  const normalStyles =
    "border border-blue-500 hover:border-blue-600 active:border-blue-700 dark:hover:border-blue-400 dark:active:border-blue-300";

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
