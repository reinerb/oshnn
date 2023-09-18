import React from "react";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import type { BlockPageProps } from "@/utils/types/BlogPages";
import type { GetStaticProps } from "next";
import { getPosts, getTopics } from "@/utils/queries/blogPageHandlers";

export const getStaticProps: GetStaticProps<BlockPageProps> = async () => {
  const posts = await getPosts();
  const topics = await getTopics();

  return { props: { posts, allTopics: topics } };
};

function TopicPage({ allTopics, posts }: BlockPageProps) {
  return (
    <PrimaryLayout>
      <section>
        {posts.map((post) => (
          <h2>{post.title}</h2>
        ))}
      </section>
      <section>
        {allTopics.national.children!.map((topic) => (
          <h2>{topic.title}</h2>
        ))}
      </section>
    </PrimaryLayout>
  );
}

export default TopicPage;
