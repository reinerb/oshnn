import Head from "next/head";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import ArticleBlock from "@/utils/components/ArticleBlock";

interface HomepageArticleProps {
  id: number;
  slug: string;
  title: string;
  publicationDate: string;
  publicationTitle: string;
  paywall: boolean;
}

interface HomepageProps {
  posts: HomepageArticleProps[];
}

export async function getStaticProps() {
  const postsQuery = await wpQueryHandler("posts", {
    fields: ["acf", "date"],
  });

  const posts = postsQuery.map(({ acf, ...post }) => {
    return {
      ...post,
      publicationDate: acf?.publicationDate,
      publicationTitle: acf?.publicationTitle,
      paywall: acf?.paywall,
    };
  });

  return { props: { posts } };
}

export default function Home({ posts }: HomepageProps) {
  return (
    <>
      <Head>
        <title>OSHNN | Ocean State Health News Net</title>
      </Head>
      <PrimaryLayout>
        {posts.map(({ id, ...post }) => {
          return <ArticleBlock key={id} {...post} />;
        })}
      </PrimaryLayout>
    </>
  );
}
