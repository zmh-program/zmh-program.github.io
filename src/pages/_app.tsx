import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react"
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Zmh | Nothing is impossible.</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Minghan Zhang's Portfolio" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta
          name="apple-mobile-web-app-title"
          content="Minghan Zhang's Portfolio"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="baidu-site-verification" content="codeva-a05qwHvmi1" />
        <meta name="keywords" content="zmh-program, ProgramZmh, LightXi" />
        <meta
          name="description"
          content="Hi, I'm Minghan Zhang, Co-Founder @LightXi Inc. Passionate about innovation and creation. Embracing challenges and turning ideas into reality."
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
