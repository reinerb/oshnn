import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import { Category } from "@/utils/types/blog";
import TopicsLayout from "@/utils/layouts/TopicsLayout";

const PER_PAGE = 12;

export const getStaticProps: GetStaticProps<BlockPageProps> = async (
  context,
) => {
  const topic: Category = await wpQueryHandler("categories", {
    fields: ["count"],
    slug: context.params?.slug as string,
  }).then((res) => res[0]);

  const page = Number(context.params?.page);

  // Get the relevant posts
  const posts = await getPosts({
    page,
    perPage: PER_PAGE,
    categoryIds: [topic.id],
  });
  const allTopics = await getTopics();

  // Get the total number of pages
  const totalPages = Math.ceil(topic.count! / PER_PAGE);

  return { props: { topic, posts, allTopics, page, totalPages } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const topics: Category[] = await wpQueryHandler("categories");

  let paths: { params: { slug: string; page: string } }[] = [];

  for (let topic of topics) {
    const response = await fetch(
      `${process.env.WORDPRESS_URL}/posts?per_page=${PER_PAGE}&category=${topic.id}`,
    );
    const pagination = await Number(response.headers.get("X-WP-TotalPages"));

    for (let i = 1; i <= pagination; i++) {
      paths = [...paths, { params: { slug: topic.slug, page: i.toString() } }];
    }
  }

  return { paths, fallback: false };
};

function TopicPage(props: BlockPageProps) {
  return <TopicsLayout {...props} />;
}

export default TopicPage;
