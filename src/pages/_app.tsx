import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Kairo | About Me</title>
        <meta name="application-name" content="Kairo | About Me" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kairo | About Me" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="theme-color" content="#000000" />
        <meta name="keywords" content="Kairo, ProgramZmh, LightXi" />
        <meta
          name="description"
          content="Hi, I'm Kairo, Co-Founder @LightXi Inc. Passionate about innovation and creation. Embracing challenges and turning ideas into reality."
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}
