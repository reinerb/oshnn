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
      <main className="container mx-4 flex flex-col justify-center">
        {children}
      </main>
    </>
  );
}

export default PrimaryLayout;
