import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Title from "../../components/Title";
import SearchFilter from "../../components/SearchFilter";
import SortFilter from "../../components/SortFilter";
import StatusFilter from "../../components/StatusFilter";
import ListItems from "../../components/ListItems";

function ShowModules() {
  //Getting Module Title from Query Selector
  const router = useRouter();
  const query = router.query;
  const titleModule = query.nameModule;

  return (
  <>
    <Head>
        <title>Studio Ghibli Backoffice - Administrator - Show Modules</title>
    </Head>
    <Title title={titleModule ? titleModule : "Show Module"}/>
    <div className="relative flex items-center">
      <SearchFilter />
      <SortFilter />
      <StatusFilter />
    </div>
    
    <ListItems />
  </>
  );
}

export default ShowModules;
