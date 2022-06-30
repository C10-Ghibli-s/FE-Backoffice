import ListItems from "@components/ListItems";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useState } from "react";
import { ProductionMemberModal } from "../components/ProductionMemberModal";
import { Header } from "@components/Header";
import { ProfileModal } from "@components/ProfileModal";
import { MovieModal } from "@components/MovieModal";


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
  const [openShowModal, setOpenShowModal] = useState<string|null>(null);
  const handleProductionModal = (item:string) => {
    setOpenShowModal(`${item}`);
  };
  // dummy data
  const user = {
    id: 1,
    nickname: "John Doe",
    role: "USER",
    status: "ACTIVE"
  }
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
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
        producer="director"
        profile={{name: "John Doe", id: 1}}
      />
      <button onClick={() => setOpenShowModal('producer')}>Select Profile</button>
      <ProfileModal
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
        user={user}
      />
      <button onClick={() => setOpenShowModal('user')}>Select user</button>
      <MovieModal 
        openShowModal={openShowModal}
        setOpenShowModal={setOpenShowModal}
      />
      <button onClick={() => setOpenShowModal('movie')}>Select movie</button>
    </div>
  );
};

export default Home;
