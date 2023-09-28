import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import dayjs from "dayjs";
import Link from "next/link";
import React from "react";

type ArticleBlockProps = {
  title: string;
  publicationTitle: string;
  publicationDate: string;
  slug: string;
  paywall: boolean;
};

function ArticleBlock({
  title,
  publicationTitle,
  slug,
  publicationDate,
  paywall,
}: ArticleBlockProps) {
  const renderedDate = dayjs(publicationDate).format("MM/DD/YYYY");

  return (
    <Link
      href={`/article/${slug}`}
      className="group flex h-full flex-col rounded-md border-2 border-primary-700 p-2 transition-colors duration-200 hover:border-primary-800 dark:border-primary-300 dark:hover:border-primary-200"
    >
      <h3 className="mb-1 block text-lg font-medium text-primary-700 transition-colors duration-200 group-hover:text-primary-800 dark:text-primary-300 dark:group-hover:text-primary-200">
        {title}
      </h3>
      <div className="mt-auto flex gap-1 divide-x divide-neutral-700 leading-tight text-neutral-700 dark:divide-neutral-300 dark:text-neutral-300">
        <span>{publicationTitle}</span>
        <span className="pl-1">{renderedDate}</span>
        {paywall && (
          <span className="pl-1">
            <FontAwesomeIcon
              icon={faCircleDollarToSlot}
              aria-label="This article may require a subscription to view."
            />
          </span>
        )}
      </div>
    </Link>
  );
}

export default ArticleBlock;
