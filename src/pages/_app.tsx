import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Head>
        <title>Kairo | About Me</title>
        <meta name="application-name" content="Kairo | About Me" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Kairo | About Me" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta name="keywords" content="Kairo, ProgramZmh, LightXi" />
        <meta
          name="description"
          content="Kairo (ProgramZmh) | Full Stack Developer & Entrepreneur | Founder of CoAI.Dev & Co-Founder of LightXi Inc | Passionate about innovation, creation, and turning ideas into reality"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics />
    </ThemeProvider>
  );
}
