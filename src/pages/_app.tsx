import "@styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import React, { useEffect, useRef } from "react";
import { UserProvider } from "@auth0/nextjs-auth0";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
