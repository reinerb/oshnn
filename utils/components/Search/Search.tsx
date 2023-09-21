"use client";

import React from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

function Search() {
  return (
    <>
      <SearchBar action={(query) => console.log(query)} />;
      <SearchResults query={""} />
    </>
  );
}

export default Search;
