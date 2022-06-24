import ListItems from "@components/ListItems";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { ProductionMemberModal } from "../components/ProductionMemberModal";
import { Header } from "@components/Header";


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
      <ProductionMemberModal
        openProductionModal={openProductionModal}
        setOpenProductionModal={setOpenProductionModal}
      />
      <button onClick={handleProductionModal}>Select Profile</button>
    </div>
  );
};

export default Home;
