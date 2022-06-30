import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import { Header } from "@components/Header";


const Home: NextPage = () => {
  return (
    <div className="relative w-screen h-screen">
      <Head>
        <title>
          Ghibli Backoffice: Manage all data for Studio Ghibli Tracker
        </title>
        <meta
          name="description"
          content="Ghibli Backoffice is a platform to create, delete and update content to make scalable and dynamic Studio Ghibli Tracker. This project was built in 🚀 Platzi Master program using the best technologies and agile methodologies."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <h1 className="text-2xl font-bold text-center">Hello</h1>
    </div>
  );
};

export default Home;
