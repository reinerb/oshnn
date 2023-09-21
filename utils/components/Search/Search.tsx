"use client";

import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

type SearchProps = {
  query: string;
};

function Search({ query }: SearchProps) {
  return (
    <>
      <SearchBar action={(query) => console.log(query)} />;
      <SearchResults query={query} />
    </>
  );
}

export default Search;
