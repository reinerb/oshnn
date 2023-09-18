import React from "react";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import type { GetStaticProps } from "next";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";
import TopicsLayout from "@/utils/layouts/TopicsLayout";

const PER_PAGE = 12;

export const getStaticProps: GetStaticProps<BlockPageProps> = async () => {
  const posts = await getPosts({ page: 1, perPage: PER_PAGE });
  const allTopics = await getTopics();

  // Get the total number of pages
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/posts?per_page=${PER_PAGE}`,
  );
  const totalPages = await Number(response.headers.get("X-WP-TotalPages"));

  return { props: { posts, allTopics, totalPages } };
};

function TopicPage(props: BlockPageProps) {
  return <TopicsLayout {...props} page={1} />;
}

export default TopicPage;
