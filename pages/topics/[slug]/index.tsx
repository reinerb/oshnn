import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import type { GetStaticPaths, GetStaticProps } from "next";
import { Category } from "@/utils/types/blog";

const PER_PAGE = 12;

export const getStaticProps: GetStaticProps<BlockPageProps> = async (
  context,
) => {
  const topic: Category = await wpQueryHandler("categories", {
    slug: context.params?.slug as string,
  }).then((res) => res[0]);

  const posts = await getPosts({
    page: 1,
    perPage: PER_PAGE,
    categoryId: topic.id,
  });
  const topics = await getTopics();

  return { props: { topic, posts, allTopics: topics } };
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

function TopicPage({ topic, allTopics, posts }: BlockPageProps) {
  return (
    <PrimaryLayout>
      <section>
        {posts.map((post) => (
          <h2 key={post.id}>{post.title}</h2>
        ))}
      </section>
      <section>
        {allTopics.national.children!.map((topic) => (
          <h2 key={topic.id}>{topic.title}</h2>
        ))}
      </section>
    </PrimaryLayout>
  );
}

export default TopicPage;
