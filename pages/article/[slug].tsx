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
import dynamic from "next/dynamic";
import Head from "next/head";
import LinkButton from "@/utils/components/LinkButton";

const ShareButtons = dynamic(
  () => import("@/utils/components/ShareButtons/ShareButtons"),
  {
    ssr: false,
  },
);

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

  categories.sort((a, b) => a.id - b.id);

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

function Page({
  title,
  content,
  publicationDate,
  publicationTitle,
  paywall,
  articleUrl,
  articleAuthors,
  categories,
}: ArticleProps) {
  const renderedDate = dayjs(publicationDate).format("MMMM D, YYYY");

  const categoryLinks = categories.map((category, index) => [
    index > 0 && ", ",
    <Link key={category.id} href={`/categories/${category.slug}`}>
      {category.title}
    </Link>,
  ]);

  const truncatedTitle = title.substring(0, 30);

  return (
    <>
      <Head>
        <title>
          {`${truncatedTitle}${truncatedTitle !== title && "..."} | OSHNN`}
        </title>
      </Head>
      <PrimaryLayout className="flex flex-col gap-4">
        <article className="flex flex-col gap-2">
          <h1 className="text-2xl">{title}</h1>
          <div className="flex flex-col gap-1 italic sm:flex-row sm:gap-4 sm:divide-x sm:not-italic">
            <span>{publicationTitle}</span>
            <span className="sm:pl-4">{articleAuthors}</span>
            <span className="sm:pl-4">{renderedDate}</span>
          </div>
          <section dangerouslySetInnerHTML={{ __html: content }} />
          <LinkButton
            target="_blank"
            rel="noreferrer noopener"
            href={articleUrl}
            className="block self-center"
          >
            Read more at {publicationTitle}{" "}
            {paywall && (
              <FontAwesomeIcon icon={faCircleDollarToSlot} className="ml-2" />
            )}
          </LinkButton>
          <div>Topics: {categoryLinks}</div>
        </article>
        <ShareButtons callToAction="Share This Article" quote={title} />
        <section>
          <h2 className="text-xl">Related posts</h2>
        </section>
      </PrimaryLayout>
    </>
  );
}

export default Page;
