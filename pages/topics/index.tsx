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
    <PrimaryLayout className="grid auto-rows-max gap-4 lg:grid-cols-3">
      <section className="grid auto-rows-max grid-cols-1 gap-4 lg:col-span-2 xl:grid-cols-2">
        <h1 className="col-span-full text-2xl">Articles</h1>
        {posts.map((post) => (
          <ArticleBlock {...post} key={post.id} />
        ))}
        <div className="col-span-full flex"></div>
        {hasNextPage && (
          <div className="col-span-full flex justify-end">
            <Link href="/topics/page/2">
              Next <FontAwesomeIcon icon={faAngleRight} />
            </Link>
          </div>
        )}
      </section>
      <nav className="flex flex-col items-center gap-4 border-l-0 border-t pt-4 lg:items-start lg:border-l lg:border-t-0 lg:pl-4 lg:pt-0">
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <h2 className="text-lg">Rhode Island Topics</h2>
          <TopicButtons
            topic={allTopics.rhodeIsland}
            className="lg:justify-start"
          />
        </div>
        <div className="flex flex-col items-center gap-2 lg:items-start">
          <h2 className="text-lg">National Topics</h2>
          <TopicButtons
            topic={allTopics.national}
            className="lg:justify-start"
          />
        </div>
      </nav>
      <SearchBar
        action={(query) => console.log(query)}
        className="col-span-full"
      />
    </PrimaryLayout>
  );
}

export default TopicPage;
