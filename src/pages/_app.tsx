import '@styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  let sessionStatus = useRef<string|null>()
  useEffect(() => {
    sessionStatus.current = window.localStorage.getItem("localActiveSession");
    if(sessionStatus.current == "no active session") {
      //Push the user to login page if isn't logged yet
      router.push('/login');
    };
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  // ERROR HANDLING
  // axios.post("http://localhost:3000/graphql", {query: `mutation UpdateDirector($updateDirectorId: ID!, $data: DirecotrEditInput!) {
  //   updateDirector(id: $updateDirectorId, data: $data) {
  //     name
  //     id
  //   }
  // }`, variables: {
  //   "updateDirectorId": "2",
  //   "data": {
  //   "name": "zqwe"
  //   } 
  // }},
  //  {
  //   headers: {
  //   'Content-Type': 'application/json'
  //   }
  // })
  // .then(res => {
  //   typeof JSON.parse(res.request.response).errors !== "undefined" ? console.error(JSON.parse(res.request.response).errors[0].message) : console.log('no hay errores xd') 
  // })
  // .catch(err => console.log(err))
  return (
      <Component {...pageProps} />
  ); 
};

export default MyApp