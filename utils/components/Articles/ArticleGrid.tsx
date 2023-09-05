import React from "react";

interface ArticleGridProps {
  title: string;
  children: React.ReactNode;
}

function ArticleGrid(props: ArticleGridProps) {
  const { title, children } = props;

  return (
    <section
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4`}
    >
      <h2 className="col-span-full text-center text-xl">{title}</h2>
      {children}
    </section>
  );
}

export default ArticleGrid;
