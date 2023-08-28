import Head from "next/head";
import PrimaryLayout from "@/utils/layouts/PrimaryLayout";

export default function Home() {
  return (
    <>
      <Head>
        <title>OSHNN | Ocean State Health News Net</title>
      </Head>
      <PrimaryLayout>
        <h1>Home</h1>
      </PrimaryLayout>
    </>
  );
}
