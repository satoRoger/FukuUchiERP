import { stringify } from "querystring";
import React from "react";
import BasicSidebar, {
  defaultProps,
} from "../src/components/sidebar/basicSidebar";

export default { title: "WIP/Sidebar/common" };

const links = [{ url: "test" }, { url: "test2" }];

export const basicSidebar = (args) => <BasicSidebar {...args} />;
basicSidebar.args = { ...defaultProps, linkList: links };
