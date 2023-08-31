import React from "react";
import Header from "../components/Header";

interface Props {
  children?: React.ReactNode;
}

function PrimaryLayout(props: Props) {
  const { children } = props;

  return (
    <>
      <Header />
      <div className="flex justify-center">
        <main className="container mx-8">{children}</main>
      </div>
    </>
  );
}

export default PrimaryLayout;
