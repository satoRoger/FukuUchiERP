import { stringify } from "querystring";
import React from "react";
import Sidebar,{containerProps} from "../src/components/sidebar/sidebar";

export default {
  title: "WIP/Sidebar/common",
  argTypes: { onClick: { action: "clicked" } },
};

const links = [{ url: "test" }, { url: "test2" }];
/*
export const basicSidebar = (args) => (
  <SidebarContaniner>
    <SidebarHead>
      <SidebarUsername>
        name
      </SidebarUsername>
    </SidebarHead>
    <SidebarBody>
      list1
    </SidebarBody>
  </SidebarContaniner>
);
*/
export const basicSidebar = ((args) => (
  <>
  <Sidebar.container>
    <Sidebar.head>
    </Sidebar.head>
    <Sidebar.body>
      list1
    </Sidebar.body>
  </Sidebar.container></>));

  basicSidebar.args={...containerProps}