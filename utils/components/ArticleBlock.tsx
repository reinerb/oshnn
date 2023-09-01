import Link from "next/link";
import React from "react";

interface ArticleBlockProps {
  title: string;
  publicationTitle: string;
  publicationDate: string;
  slug: string;
}

function ArticleBlock(props: ArticleBlockProps) {
  const { title, publicationTitle, slug, publicationDate } = props;

  return (
    <Link href={`/article/${slug}`}>
      <h2 className="block">{title}</h2>
      <div className="flex">
        <span>{publicationTitle}</span>
        <span>{publicationDate}</span>
      </div>
    </Link>
  );
}

export default ArticleBlock;
