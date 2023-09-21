"use client";

import React, { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

type SearchProps = {
  search?: string;
  page?: number;
};

function Search({ search, page }: SearchProps) {
  return (
    <div className="flex flex-col gap-4">
      <SearchBar initialQuery={search || ""} />
      <SearchResults searchString={search || ""} page={Number(page) || 1} />
    </div>
  );
}

export default Search;
