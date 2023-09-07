import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Jost } from "next/font/google";
import type { AppProps } from "next/app";

const jost = Jost({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <Component {...pageProps} />

      <style jsx global>
        {`
          :root {
            --font-jost: ${jost.style.fontFamily};
          }
        `}
      </style>
    </ThemeProvider>
  );
}
