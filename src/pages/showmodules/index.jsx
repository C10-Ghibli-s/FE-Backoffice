import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Title from "../../components/Title";
import ListItems from "../../components/ListItems";

function ShowModules() {
  //Getting Module Title from Query Selector
  const router = useRouter();
  const query = router.query;
  const title = query.nameModule;

  return (
  <>
    <Head>
        <title>Studio Ghibli Backoffice - Administrator - Show Modules</title>
    </Head>
    <Title title={title}/>
    <ListItems />
  </>
  );
}

export default ShowModules;
