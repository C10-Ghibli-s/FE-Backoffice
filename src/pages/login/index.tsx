import type { NextPage } from "next";
import React from 'react';
import LoginForm from '@components/LoginForm';

import LoginFacebookButton from '@components/LoginFacebookButton';
import LoginTwitterButton from '@components/LoginTwitterButton';

const Login: NextPage = () => {
  return (
      <main className="grid items-center justify-center w-screen h-screen grid-rows-2 bg-gray-100 md:flex">
        <div className="flex flex-col items-center justify-center w-full row-start-2 row-end-3 mt-10 md:mt-0 md:w-2/5 h-3/4">
          <LoginTwitterButton/>
          <LoginFacebookButton/>
        </div>
        <div className="flex flex-col w-full row-start-1 row-end-2 mt-10 font-bold md:w-2/5 h-3/4 justify-evenly md:mt-0 md:p-10 md:border-l border-l-gray-300">
          <h1 className="text-2xl text-center">Studio Ghibli <br/><span className="text-sky-600">BackOffice</span></h1>
          <LoginForm/>
        </div>
      </main>
  );
}


export default Login;

