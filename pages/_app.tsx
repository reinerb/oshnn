import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Jost } from "next/font/google";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";

const jost = Jost({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta charSet="utf-8" />
      </Head>
      <GoogleAnalytics trackPageViews />
      <Component {...pageProps} />
      <Analytics />

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
