import { stringify } from "querystring";
import React from "react";
import Sidebar from "../view/component/sidebar/sidebar";
import { containerProps } from "../view/component/sidebar/sidebarContainer";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import { orange } from "@material-ui/core/colors";

export default {
  title: "WIP/component/sidebar",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    sidebarWidth: { control: { type: "range", min: 50, max: 1000, step: 10 } },
  },
};

const template = (args) => {
  const theme = {
    palette: {
      primary: { main: args.primaryColor },
    },
    layout: {
      sidebar: {
        width: args.sidebarWidth,
      },
    },
  };

  return (
    <>
      <ThemeProvider theme={createMuiTheme(theme)}>
        <Sidebar.container open={args.open}>
          <Sidebar.list>
            <Sidebar.link text={args.text} active />
            <Sidebar.link text={"test"} />
            <Sidebar.link text={"test"} />
            <Sidebar.link text={"test"} />
            <Sidebar.link text={"test"} />
            <Sidebar.link text={"test"} />
          </Sidebar.list>
        </Sidebar.container>
      </ThemeProvider>
    </>
  );
};

export const basicSidebar = template.bind({});

basicSidebar.args = {
  primaryColor: "#005f63",
  secondaryColor: "#005f63",
  open: false,
  text: "tete",
};
