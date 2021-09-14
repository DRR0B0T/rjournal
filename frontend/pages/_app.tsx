import "../styles/globals.scss";
import type { AppProps } from "next/app";
import React from "react";
import Head from "next/head";
import { theme } from "../theme";
import { CssBaseline, MuiThemeProvider } from "@material-ui/core";
import "macro-css";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>RJournal</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,400;1,500;
        1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        <Component {...pageProps} />
      </MuiThemeProvider>
    </>
  );
}
export default MyApp;