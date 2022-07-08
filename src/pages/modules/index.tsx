/* eslint-disable react/jsx-no-undef */
import React, { useEffect, useState } from "react";
import Head from "next/head";
import { ModuleCard } from "../../components/ModuleCard";
import { CreateItemModal } from "@components/CreateItemModal";
import { Header } from "@components/Header";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Modules(): JSX.Element {
  // Validates the user has the correct privileges to access this page, and save the user data to the state
  // const [token, setToken] = useState<string | null | JSON>(null);
  // useEffect(() => {
  //   const callApi = async () => {
  //     try {
  //       const response = await fetch("/api/shows");
  //       const data = await response.json();
  //       console.log(data);
  //       setToken(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   callApi();
  // }, [setToken]);

  const TITLE = "Modules";
  const [showCreateItem, setShowCreateItem] = useState<string | null>(null);

  return (
    <>
      <Head>
        <title>Studio Ghibli Backoffice - Administrator</title>
      </Head>
      <Header />
      <h1 className="p-2 mt-5 text-3xl font-semibold text-gray-900 border-l-4 border-blue-500 sm:text-left sm:ml-32">
        {TITLE}
      </h1>
      <section className="flex flex-col items-center justify-center my-8">
        <ModuleCard
          title={"Users"}
          description={"Find , create, edit or delete users"}
          icons={"bg-usersIcon"}
          goToSearchPage={"/showmodules"}
          itemToCreate={"user"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Movies"}
          description={"Release a new movie, edit, or delete it"}
          icons={"bg-moviesIcon"}
          goToSearchPage={"/showmodules"}
          itemToCreate={"movie"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Writers"}
          description={"Add or edit a writer"}
          icons={"bg-writersIcon"}
          goToSearchPage={"/showmodules"}
          itemToCreate={"writer"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Directors"}
          description={"Add or edit a director"}
          icons={"bg-directorsIcon"}
          goToSearchPage={"/showmodules"}
          itemToCreate={"director"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Musicians"}
          description={"Add or edit a musician"}
          icons="bg-musiciansIcon"
          goToSearchPage={"/showmodules"}
          itemToCreate={"musician"}
          setShowCreateItem={setShowCreateItem}
        />
        <ModuleCard
          title={"Roles"}
          description={"Assign new roles"}
          icons="bg-rolesIcon"
          goToSearchPage={"/showmodules"}
          itemToCreate={"role"}
          setShowCreateItem={setShowCreateItem}
        />
      </section>
      {showCreateItem !== null && (
        <CreateItemModal
          item={showCreateItem}
          setShowCreateItem={setShowCreateItem}
        />
      )}
      {/* <SessionUser/> */}
    </>
  );
}
// // Validates the user has logged in
// export default withPageAuthRequired(Modules, {
//   onRedirecting: () => <p>loading...</p>,
//   onError: error => <p>{error.message}</p>,
// });

export default Modules;
