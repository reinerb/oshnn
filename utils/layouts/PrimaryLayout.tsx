import React from "react";
import Header from "../components/Header";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

function PrimaryLayout(props: Props) {
  const { children, className } = props;

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <main className={`container mx-8 ${className}`}>{children}</main>
      </div>
    </>
  );
}

export default PrimaryLayout;
