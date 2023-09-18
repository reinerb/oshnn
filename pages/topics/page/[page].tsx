import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import { GetStaticPaths, GetStaticProps } from "next";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";

const PER_PAGE = 12;

export const getStaticProps: GetStaticProps<BlockPageProps> = async (
  context,
) => {
  const page = Number(context.params?.page);

  // Get the relevant posts and all topics
  const posts = await getPosts({ page, perPage: PER_PAGE });
  const allTopics = await getTopics();

  // Get the total number of pages
  const response = await fetch(
    `${process.env.WORDPRESS_URL}/posts?per_page=${PER_PAGE}`,
  );
  const totalPages = await Number(response.headers.get("X-WP-TotalPages"));

  return { props: { posts, allTopics, page, totalPages } };
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

  return { paths, fallback: false };
};

function TopicPage({ allTopics, posts, page, totalPages }: BlockPageProps) {
  return (
    <PrimaryLayout>
      {posts.map((post) => (
        <h1>{post.title}</h1>
      ))}
    </PrimaryLayout>
  );
}

export default TopicPage;
