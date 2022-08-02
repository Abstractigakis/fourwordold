import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useState } from "react";

import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import PageLoading from "@components/PageLoading";

import Layout from "@components/Layout";
// import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <SessionProvider session={session}> */}

        <PageLoading />
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
