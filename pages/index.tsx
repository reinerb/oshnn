import Head from "next/head";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import type { PostQueryData } from "@/utils/types/wordpressQueries";

export async function getStaticProps() {
  const posts = await JSON.stringify(wpQueryHandler["posts"]());

  return { props: { posts } };
}

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>OSHNN | Ocean State Health News Net</title>
      </Head>
      <PrimaryLayout>{posts}</PrimaryLayout>
    </>
  );
}
