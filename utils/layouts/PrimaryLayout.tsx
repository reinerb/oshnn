import React from "react";
import Header from "../components/PrimaryLayout/Header";
import Footer from "../components/PrimaryLayout/Footer";
import FooterDivider from "../components/PrimaryLayout/FooterDivider";

type PrimaryLayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

function PrimaryLayout({ children, className }: PrimaryLayoutProps) {
  return (
    <div className="grid-rows-body grid min-h-screen">
      <Header />
      <div className="flex justify-center">
        <main className={`container mx-8 ${className}`}>{children}</main>
      </div>
      <FooterDivider className="container mx-auto my-8" />
      <Footer />
    </div>
  );
}

export default PrimaryLayout;
