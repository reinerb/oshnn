import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import type { GetStaticProps } from "next";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";

const PER_PAGE = 12;

export const getStaticProps: GetStaticProps<BlockPageProps> = async () => {
  const posts = await getPosts({ page: 1, perPage: PER_PAGE });
  const topics = await getTopics();

  return { props: { posts, allTopics: topics } };
};

function TopicPage({ allTopics, posts }: BlockPageProps) {
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
