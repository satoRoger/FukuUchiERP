import { stringify } from "querystring";
import React from "react";
import Sidebar from "../view/component/sidebar/sidebar";
import {
  createMuiTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import sidebarLinks from "./argsValues/sidebarLinksValue";
import defaultTheme from "../view/theme/applicationTheme";

export default {
  title: "WIP/component/sidebar",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    sidebarWidth: { control: { type: "range", min: 50, max: 1000, step: 10 } },
    links: { control: { type: "array", separator: "," } },
    onClick: { action: "clicked" },
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
        <Sidebar.container open={args.open}>
          <Sidebar.head>
            <Sidebar.userDisplay name={"佐藤伸明"} />
          </Sidebar.head>
          <Sidebar.list>
            {args.links.map((link) => {
              return (
                <Sidebar.link
                  text={link.text}
                  icon={link.icon}
                  active={link.active}
                  onClick={args.onClick}
                />
              );
            })}
          </Sidebar.list>
        </Sidebar.container>
      </ThemeProvider>
    </>
  );
};

export const basicSidebar = template.bind({});

basicSidebar.args = {
  open: false,
  text: "tete",
  links: sidebarLinks,
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  sidebarWidth: defaultTheme.layout.sidebar.width,
};
