import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ProgramZmh の 主页</title>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="application-name" content="ProgramZmh の 主页"/>
        <meta name="apple-mobile-web-app-capable" content="yes"/>
        <meta name="apple-mobile-web-app-status-bar-style" content="default"/>
        <meta name="apple-mobile-web-app-title" content="ProgramZmh の 主页"/>
        <meta name="mobile-web-app-capable" content="yes"/>
        <meta name="theme-color" content="#000000"/>
        <meta name="baidu-site-verification" content="codeva-a05qwHvmi1"/>
        <meta name="keywords" content="zmh-program, ProgramZmh, LightXi"/>
        <meta
          name="description"
          content="这里是ProgramZmh の 主页！全栈开发者，热爱创新，喜爱创造。目前担任晞云 CTO，致力于创新并提供优质的产品。生于 2009 年，七年编程生涯，感慨万千。"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
