"use client";

import React, { ChangeEvent, useState } from "react";
import Button from "../Button";
import { twMerge } from "tailwind-merge";

type SearchBarProps = {
  initialQuery?: string;
  action: (query: string) => void;
  className?: string;
};

const SearchBar = ({
  action,
  initialQuery = "",
  className,
}: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <section className={twMerge("flex flex-col gap-2 sm:flex-row", className)}>
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        name="search"
        value={query}
        onChange={handleChange}
        placeholder="Search"
        className="rounded-md bg-neutral-200 px-4 py-2 outline-none placeholder:text-neutral-800 focus-within:bg-neutral-300 dark:bg-neutral-800 dark:placeholder:text-neutral-200 dark:focus-within:bg-neutral-700 sm:flex-1"
      />
      <Button primary onClick={() => action(query)}>
        Search
      </Button>
    </section>
  );
};

export default SearchBar;