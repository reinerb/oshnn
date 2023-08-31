import React from "react";
import Link from "next/link";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import type { PostData } from "@/utils/types/wordpressQueries";
import type { Category } from "@/utils/types/blog";
import type { GetStaticPaths, GetStaticProps } from "next";
import dayjs from "dayjs";
import ShareButton from "@/utils/components/ShareButton";

interface ArticleProps {
  title: string;
  content: string;
  publicationDate: string;
  articleAuthors: string;
  publicationTitle: string;
  articleUrl: string;
  paywall: boolean;
  categories: Category[];
}

export const getStaticProps: GetStaticProps<ArticleProps> = async (context) => {
  const slug = context.params?.slug as string;

  const response = (await wpQueryHandler("posts", {
    fields: ["acf", "categories", "content"],
    slug,
  })) as PostData[];
  const postData = response[0];

  const categoryQuery = (await wpQueryHandler("categories")) as Category[];

  const categories = categoryQuery.filter((category) => {
    return postData.categories?.includes(category.id);
  });

  return {
    props: {
      title: postData.title,
      content: postData.content,
      ...postData.acf,
      categories,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postData = await wpQueryHandler("posts");

  const paths = postData.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

function Page(props: ArticleProps) {
  const {
    title,
    content,
    publicationDate,
    publicationTitle,
    paywall,
    articleUrl,
    articleAuthors,
    categories,
  } = props;

  const renderedDate = dayjs(publicationDate).format("MMMM D, YYYY");

  const categoryLinks = categories.map((category, index) => [
    index > 0 && ", ",
    <Link key={category.id} href={`/categories/${category.slug}`}>
      {category.title}
    </Link>,
  ]);

  return (
    <PrimaryLayout>
      <article className="flex flex-col gap-2">
        <h1 className="text-2xl">
          {title}
          {paywall && (
            <FontAwesomeIcon icon={faCircleDollarToSlot} className="ml-4" />
          )}
        </h1>
        <div className="flex gap-4 divide-x">
          <span>{publicationTitle}</span>
          <span className="pl-4">{articleAuthors}</span>
          <span className="pl-4">{renderedDate}</span>
        </div>
        <section dangerouslySetInnerHTML={{ __html: content }} />
        <Link
          target="_blank"
          rel="noreferrer noopener"
          href={articleUrl}
          className="block self-center"
        >
          Read more at {publicationTitle}
        </Link>
        <div>Topics: {categoryLinks}</div>
      </article>
      <section className="flex justify-between">
        <h2 className="block text-lg">Share this article</h2>
        <div id="share-buttons" className="flex items-center gap-3 text-lg">
          <ShareButton shareTo="facebook" url={location.href} />
          <ShareButton shareTo="twitter" url={location.href} />
          <ShareButton shareTo="linkedin" url={location.href} />
          <ShareButton shareTo="email" url={location.href} />
          <ShareButton shareTo="clipboard" url={location.href} />
        </div>
      </section>
      <section>
        <h2 className="text-xl">Related posts</h2>
      </section>
    </PrimaryLayout>
  );
}

export default Page;
