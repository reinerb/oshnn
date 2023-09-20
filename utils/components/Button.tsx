import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  inverted?: boolean;
  primary?: boolean;
  small?: boolean;
};

function Button({
  children,
  className,
  inverted,
  primary,
  small,
  ...props
}: ButtonProps) {
  const mediumStyles = "px-4 py-2";
  const smallStyles = "px-2 py-1 text-sm";
  const secondaryStyles = `border border-primary-700 hover:border-primary-800 active:border-primary-900 dark:border-primary-300 
    dark:hover:border-primary-200 dark:active:border-primary-100 text-primary-700 hover:text-primary-800 
    active:text-primary-900 dark:text-primary-300 dark:hover:text-primary-200 dark:active:text-primary-100
    disabled:border-neutral-700 dark:disabled:border-neutral-300 disabled:text-neutral-700 dark:disabled:text-neutral-300`;
  const primaryStyles = `bg-primary-700 text-primary-50 hover:bg-primary-800 active:bg-primary-900 dark:bg-primary-300 
    dark:hover:bg-primary-200 dark:active:bg-primary-100 hover:text-primary-50 active:text-primary-50 
    dark:text-primary-950 dark:hover:text-primary-950 dark:active:text-primary-950
    disabled:bg-neutral-700 dark:disabled:bg-neutral-300 disabled:text-neutral-50 dark:disabled:text-neutral-950`;
  const invertedSecondaryStyles = `border border-primary-300 hover:border-primary-200 active:border-primary-100 
    dark:border-primary-700 dark:hover:border-primary-800 dark:active:border-primary-900 text-primary-300 
    hover:text-primary-200 active:text-primary-100 dark:text-primary-700 dark:hover:text-primary-800 dark:active:text-primary-900
    disabled:border-neutral-300 dark:disabled:border-neutral-700 disabled:text-neutral-300 dark:disabled:text-neutral-700`;
  const invertedPrimaryStyles = `bg-primary-300 text-primary-950 hover:bg-primary-200 active:bg-primary-100 dark:bg-primary-700 
    dark:hover:bg-primary-800 dark:active:bg-primary-900 hover:text-primary-950 active:text-primary-950 
    dark:text-primary-50 dark:hover:text-primary-50 dark:active:text-primary-50
    disabled:bg-neutral-300 dark:disabled:bg-neutral-700 disabled:text-neutral-950 dark:disabled:text-neutral-50`;

  return (
    <button
      {...props}
      className={twMerge(
        "block rounded-md transition-colors duration-200",
        small ? smallStyles : mediumStyles,
        primary
          ? inverted
            ? invertedPrimaryStyles
            : primaryStyles
          : inverted
          ? invertedSecondaryStyles
          : secondaryStyles,
        className,
      )}
    >
      {children}
    </button>
  );
}

export default Button;
