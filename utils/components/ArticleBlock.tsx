import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

interface ArticleBlockProps {
  title: string;
  publicationTitle: string;
  publicationDate: string;
  slug: string;
  paywall: boolean;
}

function ArticleBlock(props: ArticleBlockProps) {
  const { title, publicationTitle, slug, publicationDate, paywall } = props;

  const renderedDate = dayjs(publicationDate).format("MM/DD/YYYY");

  return (
    <Link
      href={`/article/${slug}`}
      className="block flex flex-col rounded-md border p-2"
    >
      <h2 className="mb-1 block text-lg text-blue-500">{title}</h2>
      <div className="flex gap-1 divide-x divide-blue-700 leading-tight text-blue-700 dark:divide-blue-300 dark:text-blue-300">
        <span>{publicationTitle}</span>
        <span className="pl-1">{renderedDate}</span>
      </div>
    </Link>
  );
}

export default ArticleBlock;
