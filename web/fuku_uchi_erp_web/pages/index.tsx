import React from "react";
import Head from "next/head";
import ApplicationFrame from "../src/view/template/applicationFrame/applicationFrame";
import sidebarLinks from '../src/stories/argsValues/sidebarLinksValue';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ApplicationFrame
        username="佐藤伸明"
        links={sidebarLinks}
        sidebarState={"permanent"}
      >
        test
      </ApplicationFrame>
    </div>
  );
}
