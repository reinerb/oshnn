import React from "react";
import Header from "../components/PrimaryLayout/Header";
import Footer from "../components/PrimaryLayout/Footer";
import FooterDivider from "../components/PrimaryLayout/FooterDivider";
import Head from "next/head";

type PrimaryLayoutProps = {
  title: string;
  meta?: string;
  children?: React.ReactNode;
  className?: string;
};

function PrimaryLayout({
  title,
  meta,
  children,
  className,
}: PrimaryLayoutProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={meta} />
      </Head>
      <div className={`grid min-h-screen grid-rows-body`}>
        <Header />
        <div className="flex justify-center">
          <main className={`container mx-8 ${className}`}>{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default PrimaryLayout;
