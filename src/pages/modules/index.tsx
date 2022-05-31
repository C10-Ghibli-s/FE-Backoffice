import React from "react";
import Head from "next/head";
import { ModuleCard } from "@components/ModuleCard";

export default function Modules() {
  const TITLE = "Modules";
  return (
    <>
      <Head>
        <title>Studio Ghibli Backoffice - Administrator</title>
      </Head>
      {/* <Header></Header> */}
      <h1 className="w-5/6 px-4 text-3xl font-semibold text-center text-gray-900 border-l-4 border-blue-500 my-7 mx-36 sm:text-left xl:w-4/6">
        {TITLE}
      </h1>
      <section className="flex flex-col items-center justify-center mt-12">
        <ModuleCard
          title={"Users"}
          description={"Find , create, edit or delete users"}
          icons={"users-icon"}
          goToSearchPage={"/#"}
          goToCreatePage={"/#"}
        />
        <ModuleCard
          title={"Movies"}
          description={"Release a new movie, edit, or delete it"}
          icons={"movies-icon"}
          goToSearchPage={"/#"}
          goToCreatePage={"/#"}
        />
        <ModuleCard
          title={"Writers"}
          description={"Add or edit a writer"}
          icons={"writers-icon"}
          goToSearchPage={"/#"}
          goToCreatePage={"/#"}
        />
        <ModuleCard
          title={"Directors"}
          description={"Add or edit a director"}
          icons={"directors-icon"}
          goToSearchPage={"/#"}
          goToCreatePage={"/#"}
        />
        <ModuleCard
          title={"Musicians"}
          description={"Add or edit a musician"}
          icons="musicians-icon"
          goToSearchPage={"/#"}
          goToCreatePage={"/#"}
        />
        <ModuleCard
          title={"Roles"}
          description={"Assign new roles"}
          icons="roles-icon"
          goToSearchPage={"/#"}
          goToCreatePage={"/#"}
        />
      </section>

      {/* <SessionUser/> */}
    </>
  );
}
