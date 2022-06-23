import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Title from "../../components/Title";
import ListItems from "../../components/ListItems";
import { Header } from "../../components/Header"

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
    <Header/>
    <Title title={titleModule ? titleModule : "Show Module"}/>
    <ListItems />
  </>
  );
}

export default ShowModules;
