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
        <meta
          name="description"
          content="这里是ProgramZmh の 主页！全栈开发者，热爱创新，喜爱创造。目前担任晞云 CTO，致力于创新并提供优质的产品。生于 2009 年，七年编程生涯，感慨万千。"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
