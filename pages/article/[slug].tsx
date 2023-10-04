import React from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleDollarToSlot } from "@fortawesome/free-solid-svg-icons";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import LinkButton from "@/utils/components/LinkButton";
import { getPosts } from "@/utils/queries/blogPageHandlers";
import ArticleGrid from "@/utils/components/Articles/ArticleGrid";
import ArticleBlock from "@/utils/components/Articles/ArticleBlock";
import type { GetStaticPaths, GetStaticProps } from "next";
import type { PostData } from "@/utils/types/wordpressQueries";
import type { Category } from "@/utils/types/blog";
import type { BlockArticle } from "@/utils/types/BlogPages";
import ViewIncrementer from "@/utils/components/ViewIncrementer";
import Head from "next/head";

const ShareButtons = dynamic(
  () => import("@/utils/components/ShareButtons/ShareButtons"),
  {
    ssr: false,
  },
);

type ArticleProps = {
  id: number;
  title: string;
  content: string;
  publicationDate: string;
  articleAuthors: string;
  publicationTitle: string;
  articleUrl: string;
  paywall: boolean;
  categories: Category[];
  relatedPosts: BlockArticle[];
};

export const getStaticProps: GetStaticProps<ArticleProps> = async (context) => {
  const slug = context.params?.slug as string;

  // Query this post's info from the CMS
  const response = (await wpQueryHandler("posts", {
    fields: ["acf", "categories", "content"],
    slug,
  })) as PostData[];
  const postData = response[0];

  // Get all of the categories for this post
  const categoryQuery = (await wpQueryHandler("categories")) as Category[];
  const categories = categoryQuery.filter((category) => {
    return postData.categories?.includes(category.id);
  });

  // Sort them so National and Rhode Island come first (they have the lowest ID)
  categories.sort((a, b) => a.id - b.id);

  // Find related posts: the newest posts that share a category with this one
  // Don't include general categories - National and Rhode Island
  // Ask for one more than needed - important in next step
  const relatedPostsQuery = await getPosts({
    page: 1,
    perPage: 4,
    categoryIds: categories
      .filter(
        (category) =>
          category.title !== "National" && category.title !== "Rhode Island",
      )
      .map((category) => category.id),
  });

  // Remove this post from the list, if present
  // Then get the first 3 elements to display
  const relatedPosts = relatedPostsQuery
    .filter((post) => post.id !== postData.id)
    .slice(0, 3);

  return {
    props: {
      id: postData.id,
      title: postData.title,
      content: postData.content,
      ...postData.acf,
      categories,
      relatedPosts,
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

function ArticlePage({
  id,
  title,
  content,
  publicationDate,
  publicationTitle,
  paywall,
  articleUrl,
  articleAuthors,
  categories,
  relatedPosts,
}: ArticleProps) {
  const renderedDate = dayjs(publicationDate).format("MMMM D, YYYY");

  const categoryLinks = categories.map((category, index) => [
    index > 0 && ", ",
    <Link key={category.id} href={`/topics/${category.slug}`}>
      {category.title}
    </Link>,
  ]);

  const truncatedTitle = title.substring(0, 30);

  return (
    <>
      <Head>
        <meta property="og:type" content="article" key="ogtype" />
      </Head>
      <PrimaryLayout
        title={`${truncatedTitle}${truncatedTitle !== title && "..."} | OSHNN`}
        meta={content.replace(/(<([^>]+)>)/gi, "")}
        className="flex flex-col gap-4"
      >
        <article className="flex flex-col gap-4">
          {/* Blog content */}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl">{title}</h1>
            <div className="flex flex-col gap-1 italic sm:flex-row sm:gap-4 sm:divide-x sm:not-italic">
              <span>{publicationTitle}</span>
              <span className="sm:pl-4">{articleAuthors}</span>
              <span className="sm:pl-4">{renderedDate}</span>
            </div>
          </div>
          <section
            dangerouslySetInnerHTML={{ __html: content }}
            className="flex gap-2"
          />

          {/* Link to full article */}
          <LinkButton
            target="_blank"
            rel="noreferrer noopener"
            href={articleUrl}
            className="block self-center"
          >
            Read more at {publicationTitle}{" "}
            {paywall && (
              <FontAwesomeIcon
                icon={faCircleDollarToSlot}
                className="ml-2"
                aria-label="This article may require a subscription to view."
              />
            )}
          </LinkButton>

          {/* Topics list */}
          <div>Topics: {categoryLinks}</div>
        </article>

        {/* Social media share */}
        <ShareButtons callToAction="Share This Article" quote={title} />

        {/* Related articles */}
        <section>
          <ArticleGrid title="Related headlines" headlineStart>
            {relatedPosts.map(({ id, ...post }) => (
              <ArticleBlock {...post} key={id} />
            ))}
          </ArticleGrid>
        </section>

        <ViewIncrementer id={id} />
      </PrimaryLayout>
    </>
  );
}

export default ArticlePage;
