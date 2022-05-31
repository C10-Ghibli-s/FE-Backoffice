import '@styles/globals.css';
import { getConfig } from '@utils/configReq';
import axios from 'axios';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let sessionStatus = useRef<string|null>()
  useEffect(() => {
    sessionStatus.current = window.localStorage.getItem("localActiveSession");
    if(sessionStatus.current == "no active session") {
      router.push('/login');
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
      <Component {...pageProps} />
  ); 
};

export default MyApp;
