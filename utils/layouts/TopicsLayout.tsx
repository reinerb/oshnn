import React from "react";
import PrimaryLayout from "./PrimaryLayout";
import { BlockPageProps } from "../types/BlogPages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ArticleBlock from "../components/Articles/ArticleBlock";
import { twMerge } from "tailwind-merge";
import SearchBar from "../components/SearchBar";
import TopicButtons from "../components/Topics/TopicButtons";

type TopicsLayoutProps = BlockPageProps & {
  className?: string;
};

function TopicsLayout({
  topic,
  allTopics,
  posts,
  page,
  totalPages,
  className,
}: TopicsLayoutProps) {
  const hasNextPage = page && totalPages && page < totalPages;
  const hasPreviousPage = page && page > 1;

  return (
    <PrimaryLayout
      className={twMerge(
        "grid-rows-search-bottom grid gap-4 lg:grid-cols-3 xl:grid-cols-4",
        className,
      )}
    >
      <section className="grid auto-rows-max grid-cols-1 gap-4 lg:col-span-2 xl:col-span-3 xl:grid-cols-2">
        <h1 className="col-span-full text-2xl">
          {topic ? topic.title : "Articles"}
        </h1>
        {posts.map((post) => (
          <ArticleBlock {...post} key={post.id} />
        ))}
        {(hasNextPage || hasPreviousPage) && (
          <div
            className={twMerge(
              "col-span-full flex",
              hasNextPage && hasPreviousPage
                ? "justify-between"
                : hasNextPage
                ? "justify-end"
                : "justify-start",
            )}
          >
            {hasPreviousPage && (
              <Link href={`/topics/page/${page - 1}`}>
                <FontAwesomeIcon icon={faAngleLeft} /> Previous
              </Link>
            )}
            {hasNextPage && (
              <Link href={`/topics/page/${page + 1}`}>
                Next <FontAwesomeIcon icon={faAngleRight} />
              </Link>
            )}
          </div>
        )}
      </section>
      <nav className="flex flex-col items-center gap-4 border-l-0 border-t pt-4 lg:items-start lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <h2 className="text-lg">Rhode Island Topics</h2>
          <TopicButtons
            topic={allTopics.rhodeIsland}
            className="lg:justify-start"
          />
        </div>
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <h2 className="text-lg">National Topics</h2>
          <TopicButtons
            topic={allTopics.national}
            className="lg:justify-start"
          />
        </div>
      </nav>
      <SearchBar
        action={(query) => console.log(query)}
        className="col-span-full"
      />
    </PrimaryLayout>
  );
}

export default TopicsLayout;
