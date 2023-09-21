"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

type SearchProps = {
  search?: string;
  page?: number;
};

function Search({ search, page }: SearchProps) {
  const [query, setQuery] = useState(search ? decodeURIComponent(search) : "");

  const handleSearch = (query: string) => setQuery(query);

  return (
    <div className="flex flex-col gap-4">
      <SearchBar action={handleSearch} initialQuery={query} />
      <SearchResults query={query} startPage={Number(page) || 1} />
    </div>
  );
}

export default Search;
