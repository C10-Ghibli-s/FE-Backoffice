import type { NextPage } from "next";
import React from 'react';
import LoginForm from '@components/LoginForm';
import LoginFacebookButton from '@components/LoginFacebookButton';
import LoginTwitterButton from '@components/LoginTwitterButton';

const Login: NextPage = () => {
  return (
    <main className="grid grid-rows-2 md:flex bg-gray-100 justify-center items-center w-screen h-screen">
      <div className="row-start-2 mt-10 md:mt-0 row-end-3 w-full md:w-2/5 flex flex-col justify-center items-center h-3/4">
        <LoginTwitterButton/>
        <LoginFacebookButton/>
      </div>
      <div className="row-start-1 row-end-2 w-full md:w-2/5 h-3/4 flex flex-col justify-evenly mt-10 md:mt-0 md:p-10 md:border-l border-l-gray-300 font-bold">
        <h1 className="text-center text-2xl">Studio Ghibli <br/><span className="text-sky-600">BackOffice</span></h1>
        <LoginForm/>
      </div>
    </main>
  );
}


export default Login;

