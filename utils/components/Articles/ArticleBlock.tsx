import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      className="border-primary-500 hover:border-primary-600 dark:hover:border-primary-400 group flex h-full flex-col rounded-md border-2 p-2 transition-colors duration-200"
    >
      <h3 className="text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 mb-1 block text-lg font-medium transition-colors duration-200">
        {title}
      </h3>
      <div className="divide-primary-700 text-primary-700 dark:divide-primary-300 dark:text-primary-300 mt-auto flex gap-1 divide-x leading-tight">
        <span>{publicationTitle}</span>
        <span className="pl-1">{renderedDate}</span>
        {paywall && (
          <span className="pl-1">
            <FontAwesomeIcon icon={faCircleDollarToSlot} />
          </span>
        )}
      </div>
    </Link>
  );
}

export default ArticleBlock;
