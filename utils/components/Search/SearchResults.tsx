"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

type SearchResultsProps = {
  query: string;
  className?: string;
};

function SearchResults({ query, className }: SearchResultsProps) {
  return <section className={twMerge(className)}>{query}</section>;
}

export default SearchResults;
