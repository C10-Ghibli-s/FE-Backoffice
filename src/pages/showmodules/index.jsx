import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Title from "../../components/Title";
import SearchFilter from "../../components/SearchFilter";
import SortFilter from "../../components/SortFilter";
import StatusFilter from "../../components/StatusFilter";
import ListItems from "../../components/ListItems";
import { Header } from "../../components/Header"

import {useGetModules} from '../../hooks/useGetModules';

function ShowModules() {
  //Getting Module Title from Query Selector
  const router = useRouter();
  const query = router.query;
  const titleModule = query.nameModule;

  const {items} = useGetModules('public2');
  console.log("items from pages", items);

  return (
  <>
    <Head>
        <title>Studio Ghibli Backoffice - Admin
          istrator - Show Modules</title>
    </Head>
    <Header/>
    <Title title={titleModule ? titleModule : "Show Module"}/>
    <section className="flex items-end justify-center min-h-full gap-6 px-4 py-16 sm:px-6 lg:px-8">
      <SearchFilter data={{items}} />
      <SortFilter />
      <StatusFilter />
    </section>
    <section className="flex flex-col items-center justify-center my-8">
      <ListItems data={{items}}/>
    </section>
    
    
  </>
  );
}

export default ShowModules;
