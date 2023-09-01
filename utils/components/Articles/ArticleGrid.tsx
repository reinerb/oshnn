import React from "react";

interface ArticleGridProps {
  title: string;
  cols?: number;
  children: React.ReactNode;
}

function ArticleGrid(props: ArticleGridProps) {
  const { title, cols = 4, children } = props;

  return (
    <section className={`grid grid-cols-${cols} gap-4`}>
      <h2 className="col-span-full text-xl">{title}</h2>
      {children}
    </section>
  );
}

export default ArticleGrid;
