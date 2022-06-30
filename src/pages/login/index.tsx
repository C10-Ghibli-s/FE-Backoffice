/* eslint-disable @next/next/no-html-link-for-pages */
import type { NextPage } from "next";
import React from "react";
import LoginForm from "@components/LoginForm";
import { useUser } from "@auth0/nextjs-auth0";
import Router from "next/router";

import LoginFacebookButton from "@components/LoginFacebookButton";
import LoginTwitterButton from "@components/LoginTwitterButton";
import Portal from "src/HOC/modal";

const Login: NextPage = () => {
  const { user, error, isLoading } = useUser();
  console.log(user);

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }

  if (user) {
    Router.push("/modules");
  }

  return (
    <main className="flex items-center justify-center w-screen h-screen bg-gray-100">
      {/* <div className="flex flex-col items-center justify-center w-full row-start-2 row-end-3 mt-10 md:mt-0 md:w-2/5 h-3/4">
        <LoginTwitterButton />
        <LoginFacebookButton />
      </div> */}
      <div className="relative w-screen h-full md:w-[400px] md:h-[548px] flex-col flex justify-around items-center bg-white md:shadow-custom md:rounded-md p-6">
        <div className="flex items-center justify-center w-full h-1/2">
          <h1 className="mt-8 relative text-2xl h-fit text-center  after:content-[''] after:absolute after:h-[2px] after:w-[300px] after:bg-gray-200 after:left-[-80px] after:bottom-[-15px]">
            Studio Ghibli <br />
            <span className="font-bold text-blue-500">BackOffice</span>
          </h1>
        </div>
        <div className="flex flex-col items-center justify-start w-full sm:justify-center h-1/2">
          {user ? (
            <p className="w-[280px] text-center ">
              You are already logged as{" "}
              <span className="font-bold">{user.nickname}</span> <br />
              <a href="/api/auth/logout" className="text-blue-500 hover:underline">
                Logout
              </a>
            </p>
          ) : (
            <a
              href="/api/auth/login"
              className="p-2 mt-6 font-bold text-center align-middle text-white transition-colors bg-blue-500 rounded-sm active:bg-blue-600 hover:bg-blue-600 weigth w-[280px] h-[52px] py-3"
            >
              Join
            </a>
          )}

          {!user && (
            <a
              href="https://se-ghibli-tracker.netlify.app/"
              className="w-[280px] mt-4 text-blue-500 hover:underline"
            >
              Go to Ghilbli Tracker
            </a>
          )}
        </div>

        {/* <LoginForm /> */}
      </div>
    </main>
  );
};

export default Login;
