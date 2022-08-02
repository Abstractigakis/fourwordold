import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import { Router } from "next/router";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import NProgress from "nprogress";
import PageLoading from "@components/PageLoading";

import Layout from "@components/Layout";
// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url: any) => {
    setLoading(true);
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url: any) => {
    setTimeout(() => {
      NProgress.done();
      setLoading(false);
    }, 3000);
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <SessionProvider session={session}> */}
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
            integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
        </Head>
        <PageLoading loading={loading} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </SessionProvider> */}
        <ReactQueryDevtools initialIsOpen={false} />
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
