import type { NextPage } from "next";
import Head from "next/head";
import Game from "@components/Game";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>4word</title>
        <meta name="description" content="A word based game web application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Game />
      {/* <main>welcome to fourword.app</main> */}
    </div>
  );
};

export default Home;
