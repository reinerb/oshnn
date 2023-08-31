import Head from "next/head";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";
import { wpQueryHandler } from "@/utils/queries/wpQueryHandler";
import { WordPressData } from "@/utils/types/wordpressQueries";
import Link from "next/link";

export async function getStaticProps() {
  const posts = await wpQueryHandler("posts", {
    fields: ["acf", "date", "categories"],
  });

  console.log(posts);

  return { props: { posts } };
}

export default function Home({ posts }: { posts: WordPressData[] }) {
  return (
    <>
      <Head>
        <title>OSHNN | Ocean State Health News Net</title>
      </Head>
      <PrimaryLayout>
        <Link href={`/article/${posts[0].slug}`}>{posts[0].title}</Link>
      </PrimaryLayout>
    </>
  );
}
