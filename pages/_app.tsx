import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import Head from "next/head";
import { Jost } from "next/font/google";
import type { AppProps } from "next/app";
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from "@vercel/analytics/react";

const jost = Jost({ subsets: ["latin"] });

const environment = process.env.NEXT_PUBLIC_ENVIRONMENT || "";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta charSet="utf-8" key="charset" />
        <meta
          property="og:image"
          content="https://www.oshnn.com/images/og-logo.png"
          key="ogimage"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.oshnn.com/images/og-logo.png"
          key="ogimagesecure"
        />
        <meta property="og:image:width" content="1200" key="ogimagewidth" />
        <meta property="og:image:height" content="630" key="ogimageheight" />
        <meta property="og:locale" content="en_US" key="oglocale" />
      </Head>
      {environment === "production" && <GoogleAnalytics trackPageViews />}
      <Component {...pageProps} />
      {environment === "production" && <Analytics />}

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
