import React from "react";
import { BackgroundBeamsDemo } from "./components/BackgroundBeamsDemo";
import Head from "next/head";

const IndexAbout = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta property="og:title" content="About" key="title" />
      </Head>
      <BackgroundBeamsDemo />
    </>
  );
};

export default IndexAbout;
