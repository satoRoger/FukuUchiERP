import { stringify } from "querystring";
import React from "react";
import Sidebar from "../view/component/sidebar/sidebar";
import { containerProps } from "../view/component/sidebar/sidebarContainer";

export default {
  title: "WIP/component/sidebar"
};

const template = (args) => (
  <>
    <Sidebar.container open={args.open}>
      <Sidebar.list>
        <Sidebar.link text={args.text} />
        <Sidebar.link text={"test"} />
        <Sidebar.link text={"test"} />
        <Sidebar.link text={"test"} />
        <Sidebar.link text={"test"} />
        <Sidebar.link text={"test"} />
      </Sidebar.list>
    </Sidebar.container>
  </>
);

export const basicSidebar = template.bind({});

basicSidebar.args = { open: false ,text:"tete"};
