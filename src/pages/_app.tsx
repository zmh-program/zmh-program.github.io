import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>ProgramZmh の 主页</title>
        <meta name="baidu-site-verification" content="codeva-a05qwHvmi1" />
        <meta name="keywords" content="zmh-program, ProgramZmh, LightXi" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
