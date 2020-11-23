import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Calendar from "../../../view/component/specialized/calendar/calendar";
import defaultTheme from "../../../view/theme/applicationTheme";

export default {
  title: "WIP/component/calendar",
  argTypes: {
    sidebarOpen: { control: "boolean" },
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    sidebarWidth: { control: { type: "range", min: 50, max: 1000, step: 10 } },
  },
};

const template = (args:any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;
  defaultTheme.layout.sidebar.width = args.sidebarWidth;

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <Calendar/>
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
