import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import type { GetStaticProps } from "next";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";
import ArticleBlock from "@/utils/components/Articles/ArticleBlock";
import SearchBar from "@/utils/components/SearchBar";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import TopicButtons from "@/utils/components/Topics/TopicButtons";
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

function TopicPage({ allTopics, posts, totalPages }: BlockPageProps) {
  const hasNextPage = totalPages! > 1;

  return (
    <TopicsLayout
      page={1}
      totalPages={totalPages}
      allTopics={allTopics}
      posts={posts}
    />
  );
}

export default TopicPage;
