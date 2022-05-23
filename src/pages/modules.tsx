import React from "react";
import Head from "next/head";

import { ModuleCard } from "../components/ModuleCard";

export default function Modules() {
  let title = "Modules";
  return (
    <>
      <Head>
        <title>Studio Ghibli Backoffice - Administrator</title>
      </Head>
      {/* <Header></Header> */}
      <h1 className="w-5/6 px-4 m-4 text-3xl font-semibold text-center text-gray-900 border-l-4 border-blue-500 sm:text-left xl:w-4/6">
        {title}
      </h1>
      <section className="flex flex-col items-center justify-center">
        <ModuleCard
          title={"Users"}
          description={"Find, create, edit or delete users."}
          icon={"users-icon"}
        />
        <ModuleCard
          title={"Movies"}
          description={"Find, create, edit or delete users."}
          icon={"movies-icon"}
        />
        <ModuleCard
          title={"Writers"}
          description={"Find, create, edit or delete users."}
          icon={"writers-icon"}
        />
        <ModuleCard
          title={"Directors"}
          description={"Find, create, edit or delete users."}
          icon={"directors-icon"}
        />
        <ModuleCard
          title={"Musicians"}
          description={"Find, create, edit or delete users."}
          icon={"musicians-icon"}
        />
        <ModuleCard
          title={"Roles"}
          description={"Find, create, edit or delete users."}
          icon={"roles-icon"}
        />
      </section>

      {/* <SessionUser/> */}
    </>
  );
}
