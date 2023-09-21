"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { searchHandler } from "@/utils/queries/searchHandler";
import { BlockArticle } from "@/utils/types/BlogPages";
import ArticleBlock from "../Articles/ArticleBlock";
import ArticleGrid from "../Articles/ArticleGrid";

type SearchResultsProps = {
  searchString: any;
  startPage: number;
  className?: string;
};

const PER_PAGE = 12;

function SearchResults({
  searchString,
  startPage,
  className,
}: SearchResultsProps) {
  const [page, setPage] = useState(startPage);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlockArticle[]>([]);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    if (!searchString) {
      setLoading(false);
      return;
    }

    setLoading(true);

    const fetchData = async () => {
      const { posts, totalPages } = await searchHandler({
        searchString,
        page,
        perPage: PER_PAGE,
      });
      setPosts(posts);
      setPages(totalPages);
    };

    fetchData().catch(console.error);
  }, [searchString, page]);

  useEffect(() => {
    setLoading(false);
  }, [posts]);

  return (
    <ArticleGrid title="Search Results" headlineStart>
      {loading ? (
        <div className="col-span-full mx-auto h-16 w-16 animate-spin rounded-full border-4 border-primary-600 !border-t-transparent dark:border-primary-400">
          <div className="sr-only motion-reduce:not-sr-only">Loading...</div>
        </div>
      ) : posts.length > 0 ? (
        posts.map((post) => <ArticleBlock {...post} />)
      ) : searchString ? (
        <p>
          Sorry, we didn't find any results. Please try another search term.
        </p>
      ) : (
        <p>Enter a search term above.</p>
      )}
    </ArticleGrid>
  );
}

export default SearchResults;
