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
      className="block flex h-full flex-col rounded-md border-2 border-blue-500 p-2"
    >
      <h3 className="mb-1 block text-lg font-medium text-blue-500">{title}</h3>
      <div className="flex gap-1 divide-x divide-blue-700 leading-tight text-blue-700 dark:divide-blue-300 dark:text-blue-300">
        <span>{publicationTitle}</span>
        <span className="pl-1">{renderedDate}</span>
      </div>
    </Link>
  );
}

export default ArticleBlock;
