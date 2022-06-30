import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Title from "../../components/Title";
import SearchFilter from "../../components/SearchFilter";
import SortFilter from "../../components/SortFilter";
import StatusFilter from "../../components/StatusFilter";
import ListItems from "../../components/ListItems";
import { Header } from "../../components/Header";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useGetModules } from "../../hooks/useGetModules";

function ShowModules() {
  //Getting Module Title from Query Selector
  const router = useRouter();
  const query = router.query;
  const titleModule = query.nameModule;

  let orderBy = "";
  // Movies: -> Order by default: Ascendent by name. -> Filter: active and inactive
  // Users: -> Order by default: Descendent by name. -> Filter: active and inactive
  if (titleModule.toLowerCase() == "users") {
    orderBy = "Descendent";
  } else {
    orderBy = "Ascendent";
  }

  // Calling the hook which contains the state and return the data of items
  const { items, searchValue, orderItems, filterStatus } =
    useGetModules("public2");

  return (
    <>
      <Head>
        <title>Studio Ghibli Backoffice - Administrator - Show Modules</title>

        <meta
          name="description"
          content="Ghibli Backoffice is a platform to create, delete and update content to make scalable and dynamic Studio Ghibli Tracker. This project was built in 🚀 Platzi Master program using the best technologies and agile methodologies."
        />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <Header />
      <Title title={titleModule ? titleModule : "Show Module"} />
      <section className="flex items-end justify-center min-h-full gap-6 px-4 py-16 sm:px-6 lg:px-8">
        <SearchFilter dataItems={items} searchValue={searchValue} />
        <SortFilter orderItems={orderItems} orderBy={orderBy} />
        <StatusFilter filterStatus={filterStatus} />
      </section>
      <section className="flex flex-col items-center justify-center my-8">
        <ListItems dataItems={items} />
      </section>
    </>
  );
}

export default withPageAuthRequired(ShowModules, {
  onRedirecting: () => <p>loading...</p>,
  onError: error => <p>{error.message}</p>,
});
