"use client";

import React, { ChangeEvent, useState } from "react";

type SearchBarProps = {
  initialQuery?: string;
  action: (query: string) => void;
};

const SearchBar = ({ action, initialQuery = "" }: SearchBarProps) => {
  const [query, setQuery] = useState(initialQuery);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <section className="flex flex-col gap-2 sm:flex-row">
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
      <button
        onClick={() => action(query)}
        className="bg-primary-500 hover:bg-primary-600 active:bg-primary-700 dark:hover:bg-primary-400 dark:active:bg-primary-300 rounded-md px-4 py-2 text-neutral-50 transition-colors duration-200"
      >
        Search
      </button>
    </section>
  );
};

export default SearchBar;
