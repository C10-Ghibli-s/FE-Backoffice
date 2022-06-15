import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { MovieModal } from "../components/MovieModal";
const Home: NextPage = () => {
  // This function and state triggers the modal. Copy it, and paste it when the modal is called
  const [openModal, setOpenModal] = useState(false);
  const handleModal = () => {
    setOpenModal(true);
  };
  // This function and state triggers the modal. Copy it, and paste it when the modal is called
  const [openMovieModal, SetOpenMovieModal] = useState(false);
  const handleMovieModal = () => {
    SetOpenMovieModal(true);
  };

  return (
    <div className="relative w-screen h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold text-center">Hello</h1>
      <MovieModal
        openMovieModal={openMovieModal}
        SetOpenMovieModal={SetOpenMovieModal}
      />
      <button onClick={handleMovieModal}>Select Profile</button>
    </div>
  );
};

export default Home;
