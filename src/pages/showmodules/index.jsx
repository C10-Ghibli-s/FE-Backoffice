import React from "react";
import Head from "next/head";
import Title from "../../components/Title";
import ListItems from "../../components/ListItems";

function ShowModules() {
  const title = "Show Module"

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
