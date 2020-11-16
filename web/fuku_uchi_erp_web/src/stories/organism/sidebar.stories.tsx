import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import sidebarLinks from "../argsValues/sidebarLinksValue";
import defaultTheme from "../../view/theme/applicationTheme";
import { LinkParameter } from "../../view/component/sidebar/sidebarLink";
import Sidebar from "../../view/organism/sidebar/sidebar";

export default {
  title: "WIP/organism/sidebar",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    sidebarWidth: { control: { type: "range", min: 50, max: 1000, step: 10 } },
    links: { control: { type: "array", separator: "," } },
    onClick: { action: "clicked" },
  },
};

const linkList = (args: any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;
  defaultTheme.layout.sidebar.width = args.sidebarWidth;

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <Sidebar open links={args.links}></Sidebar>
      </ThemeProvider>
    </>
  );
};

export const basicSidebar = linkList.bind({});

basicSidebar.args = {
  open: false,
  links: sidebarLinks,
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  sidebarWidth: defaultTheme.layout.sidebar.width,
};
