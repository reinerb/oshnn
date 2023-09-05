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
        className="rounded-md bg-slate-200 px-4 py-2 outline-none placeholder:text-slate-800 focus-within:bg-slate-300 dark:bg-slate-800 dark:placeholder:text-slate-200 dark:focus-within:bg-slate-700 sm:flex-1"
      />
      <button
        onClick={() => action(query)}
        className="rounded-md bg-blue-500 px-4 py-2 text-slate-50 transition-colors duration-200 hover:bg-blue-600 active:bg-blue-700 dark:hover:bg-blue-400 dark:active:bg-blue-300"
      >
        Search
      </button>
    </section>
  );
};

export default SearchBar;
