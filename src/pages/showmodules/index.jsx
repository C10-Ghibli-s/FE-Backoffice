import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Title from "../../components/Title";
import SearchFilter from "../../components/SearchFilter";
import SortFilter from "../../components/SortFilter";
import StatusFilter from "../../components/StatusFilter";
import ListItems from "../../components/ListItems";
import { Header } from "../../components/Header"
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function ShowModules() {
  //Getting Module Title from Query Selector
  const router = useRouter();
  const query = router.query;
  const titleModule = query.nameModule;
  //http://localhost:3000/showmodules?nameModule=Users
  return (
    <>
      <Head>
        <title>Studio Ghibli Backoffice - Admin istrator - Show Modules</title>
      </Head>
      <Header />
      <Title title={titleModule ? titleModule : "Show Module"} />
      <section className="flex items-end justify-center min-h-full gap-6 px-4 py-16 sm:px-6 lg:px-8">
        <SearchFilter />
        <SortFilter />
        <StatusFilter />
      </section>
      <section className="flex flex-col items-center justify-center my-8">
        <ListItems />
      </section>
    </>
  );
}

export default withPageAuthRequired(ShowModules, {
  onRedirecting: () => <p>loading...</p>,
  onError: error => <p>{error.message}</p>,
});
