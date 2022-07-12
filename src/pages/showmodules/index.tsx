import React, { useEffect } from "react";
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
  // @ts-ignore
  const titleModule = query.nameModule;

  let orderBy = "";
  // Movies: -> Order by default: Ascendent by name. -> Filter: active and inactive
  // Users: -> Order by default: Descendent by name. -> Filter: active and inactive
  // @ts-ignore
  if (titleModule == "Users") {
    orderBy = "Descendent";
  } else {
    orderBy = "Ascendent";
  }

  // Calling the hook which contains the state and return the data of items
  const { items, searchValue, orderItems, filterStatus } =
    useGetModules(titleModule);

  return (
    <>
      <Head>
        <title>Studio Ghibli Backoffice - Administrator - Show Modules</title>
      </Head>
      <Header />
      <Title title={titleModule ? titleModule : "Show Module"} />
      <section className="flex flex-wrap items-end justify-center min-h-full gap-6 px-4 py-16 sm:px-6 lg:px-8">        <SearchFilter
          dataItems={items}
          searchValue={searchValue}
          titleModule={titleModule}
        />
        <SortFilter
          orderItems={orderItems}
          orderBy={orderBy}
          titleModule={titleModule}
        />
        <StatusFilter filterStatus={filterStatus} titleModule={titleModule} />
      </section>
      <section className="flex flex-col items-center justify-center my-8">
        {typeof items !== "undefined" && items !== null ? (
          <ListItems
            dataItems={items}
            orderItems={orderItems}
            orderBy={orderBy}
            titleModule={titleModule}
          />
        ) : (
          <div className="text-center">Loading...</div>
        )}
        {items == null && (
          <div className="text-center">Something went wrong, try later...</div>
        )}
      </section>
    </>
  );
}

export default withPageAuthRequired(ShowModules, {
  onRedirecting: () => <p>loading...</p>,
  onError: error => <p>{error.message}</p>,
});