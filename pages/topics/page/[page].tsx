import React from "react";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";
import TopicsLayout from "@/utils/layouts/TopicsLayout";

const PER_PAGE = 12;

export const getStaticProps: GetStaticProps<BlockPageProps> = async (
  context,
) => {
  const page = Number(context.params?.page);

  // Get the relevant posts and all topics
  const posts = await getPosts({ page, perPage: PER_PAGE });

  // If there are no posts, this route was not found
  if (!posts) {
    return {
      notFound: true,
    };
  }

  // Get a list of every topic
  const allTopics = await getTopics();

  // Get the total number of pages
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/posts?per_page=${PER_PAGE}`,
  );
  const totalPages = await Number(response.headers.get("X-WP-TotalPages"));

  return {
    props: { posts, allTopics, page, totalPages },
    revalidate: 300, // Revalidate every 5 minutes
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/posts?per_page=${PER_PAGE}`,
  );
  const pagination = await Number(response.headers.get("X-WP-TotalPages"));

  let paths: { params: { page: string } }[] = [];
  for (let i = 1; i <= pagination; i++) {
    paths = [...paths, { params: { page: i.toString() } }];
  }

  return { paths, fallback: "blocking" };
};

function TopicPage(props: BlockPageProps) {
  return <TopicsLayout {...props} />;
}

export default TopicPage;
