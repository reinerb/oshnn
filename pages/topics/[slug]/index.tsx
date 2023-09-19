import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import type { GetStaticPaths, GetStaticProps } from "next";
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

  const posts = await getPosts({
    page: 1,
    perPage: PER_PAGE,
    categoryIds: [topic.id],
  });
  const allTopics = await getTopics();

  const totalPages = Math.ceil(topic.count! / PER_PAGE);

  return { props: { topic, posts, allTopics, totalPages } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const topics = await wpQueryHandler("categories");

  const paths = topics.map((topic) => {
    return {
      params: {
        slug: topic.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

function TopicPage(props: BlockPageProps) {
  return <TopicsLayout {...props} page={1} />;
}

export default TopicPage;
