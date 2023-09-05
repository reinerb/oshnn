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
    <section className="grid">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        name="search"
        value={query}
        onChange={handleChange}
        placeholder="Search"
      />
      <button onClick={() => action(query)}>Search</button>
    </section>
  );
};

export default SearchBar;
