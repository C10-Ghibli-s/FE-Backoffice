import ListItems from "@components/ListItems";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { ProductionMemberModal } from "../components/ProductionMemberModal";
const Home: NextPage = () => {
  // This function and state triggers the modal. Copy it, and paste it when the modal is called
  const [openModal, setOpenModal] = useState(true);
  const handleModal = () => {
    setOpenModal(true);
  };
  // This function and state triggers the modal. Copy it, and paste it when the modal is called
  const [openMovieModal, setOpenMovieModal] = useState(false);
  const handleMovieModal = () => {
    setOpenMovieModal(true);
  };
  // This function and state triggers the modal. Copy it, and paste it when the modal is called
  const [openProductionModal, setOpenProductionModal] = useState(false);
  const handleProductionModal = () => {
    setOpenProductionModal(true);
  };

  return (
    <div className="relative w-screen h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl font-bold text-center">Hello</h1>
      <ListItems />
      <ProductionMemberModal
        openProductionModal={openProductionModal}
        setOpenProductionModal={setOpenProductionModal}
      />
      <button onClick={handleProductionModal}>Select Profile</button>
    </div>
  );
};

export default Home;
