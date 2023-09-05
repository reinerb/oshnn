import { Category } from "@/utils/types/blog";
import React from "react";
import LinkButton from "../LinkButton";

interface ArticleGridProps {
  title: string;
  children: React.ReactNode;
  topic?: Category;
}

function ArticleGrid(props: ArticleGridProps) {
  const { title, children, topic } = props;

  return (
    <section
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`}
    >
      <h2 className="col-span-full text-center text-xl">{title}</h2>
      {children}
      {topic?.children && (
        <div className="col-span-full flex flex-col gap-2">
          <h3 className="col-span-full text-center text-lg">
            {topic.title} Topics
          </h3>
          <div className="flex flex-wrap justify-center gap-2">
            {topic.children.map((topic) => (
              <LinkButton key={topic.id} href={`/topics/${topic.slug}`}>
                {topic.title}
              </LinkButton>
            ))}
            <LinkButton href={`topics/${topic.slug}`}>
              All {topic.title} Headlines
            </LinkButton>
          </div>
        </div>
      )}
    </section>
  );
}

export default ArticleGrid;
