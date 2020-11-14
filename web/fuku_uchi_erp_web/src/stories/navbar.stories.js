import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../view/component/navbar/navbar";
import defaultTheme from "../view/theme/applicationTheme";

export default {
  title: "WIP/component/navbar",
  argTypes: {
    sidebarOpen: { control: "boolean" },
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    sidebarWidth: { control: { type: "range", min: 50, max: 1000, step: 10 } },
  },
};

const template = (args) => {
  const theme = {
    ...defaultTheme,
    palette: {
      primary: { main: args.primaryColor },
      secondary: { main: args.secondaryColor },
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
        <Navbar.container sidebarOpen={args.sidebarOpen}></Navbar.container>
      </ThemeProvider>
    </>
  );
};

export const basicNavbar = template.bind({});

basicNavbar.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  sidebarWidth: defaultTheme.layout.sidebar.width,
};
