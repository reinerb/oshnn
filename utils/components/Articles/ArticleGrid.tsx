import { Category } from "@/utils/types/blog";
import React from "react";
import LinkButton from "../LinkButton";
import TopicButtons from "../Topics/TopicButtons";
import { twMerge } from "tailwind-merge";

type ArticleGridProps = {
  title: string;
  children: React.ReactNode;
  topic?: Category;
  headlineStart?: boolean;
};

function ArticleGrid({
  title,
  children,
  topic,
  headlineStart,
}: ArticleGridProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <h2
        className={twMerge(
          "col-span-full text-xl",
          headlineStart ? "text-start" : "text-center",
        )}
      >
        {title}
      </h2>
      {children}
      {topic?.children && (
        <div className="flex flex-col flex-wrap gap-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-900">
          <h3 className="col-span-full text-center text-lg">
            {topic.title} Topics
          </h3>
          {topic && <TopicButtons topic={topic} />}
        </div>
      )}
    </section>
  );
}

export default ArticleGrid;
