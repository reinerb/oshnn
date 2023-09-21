"use client";

import React, { useState } from "react";
import { twMerge } from "tailwind-merge";

type SearchResultsProps = {
  query: any;
  startPage: number;
  className?: string;
};

function SearchResults({ query, startPage, className }: SearchResultsProps) {
  const [page, setPage] = useState(startPage);
  const [loading, setLoading] = useState(true);

  return (
    <section className={twMerge(className)}>
      {false ? (
        <div className="mx-auto h-16 w-16 animate-spin rounded-full border-4 border-primary-600 !border-t-transparent dark:border-primary-400">
          <div className="sr-only motion-reduce:not-sr-only">Loading...</div>
        </div>
      ) : (
        <p>{query}</p>
      )}
    </section>
  );
}

export default SearchResults;
