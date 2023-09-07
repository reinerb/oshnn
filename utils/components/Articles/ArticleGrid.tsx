import { Category } from "@/utils/types/blog";
import React from "react";
import LinkButton from "../LinkButton";

type ArticleGridProps = {
  title: string;
  children: React.ReactNode;
  topic?: Category;
};

function ArticleGrid({ title, children, topic }: ArticleGridProps) {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <h2 className="col-span-full text-center text-xl">{title}</h2>
      {children}
      {topic?.children && (
        <div className="flex flex-col flex-wrap gap-2 rounded-md bg-neutral-100 p-2 dark:bg-neutral-900">
          <h3 className="col-span-full text-center text-lg">
            {topic.title} Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {topic.children.map((topic) => (
              <LinkButton small key={topic.id} href={`/topics/${topic.slug}`}>
                {topic.title}
              </LinkButton>
            ))}
            <LinkButton small primary href={`topics/${topic.slug}`}>
              All {topic.title} Headlines
            </LinkButton>
          </div>
        </div>
      )}
    </section>
  );
}

export default ArticleGrid;
