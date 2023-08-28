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
      <main className="container mx-auto">{children}</main>
    </>
  );
}

export default PrimaryLayout;
