"use client";

import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { searchHandler } from "@/utils/queries/searchHandler";
import { BlockArticle } from "@/utils/types/BlogPages";
import ArticleBlock from "../Articles/ArticleBlock";
import ArticleGrid from "../Articles/ArticleGrid";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

type SearchResultsProps = {
  searchString: any;
  page: number;
  className?: string;
};

const PER_PAGE = 12;

function SearchResults({ searchString, page, className }: SearchResultsProps) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState<BlockArticle[]>([]);
  const [pages, setPages] = useState(0);

  const articleBlocks = posts.map((post) => <ArticleBlock {...post} />);

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
        <>
          {articleBlocks}
          {(page > 1 || page < pages) && (
            <div className="col-span-full grid">
              {page > 1 && (
                <Link href={`/search?search=${searchString}&page=${page - 1}`}>
                  <FontAwesomeIcon icon={faAngleLeft} /> Previous
                </Link>
              )}
              {page < pages && (
                <Link
                  href={`/search?search=${searchString}&page=${page + 1}`}
                  className="justify-self-end"
                >
                  Next <FontAwesomeIcon icon={faAngleRight} />
                </Link>
              )}
            </div>
          )}
        </>
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
