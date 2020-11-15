import React from "react";
import Sidebar from "../../view/component/sidebar/sidebar";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import sidebarLinks from "../argsValues/sidebarLinksValue";
import defaultTheme from "../../view/theme/applicationTheme";

export default {
  title: "WIP/component/sidebar",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    sidebarWidth: { control: { type: "range", min: 50, max: 1000, step: 10 } },
    links: { control: { type: "array", separator: "," } },
    onClick: { action: "clicked" },
    tabType: { control: "boolean" },
  },
};

const linkList = (args) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;
  defaultTheme.layout.sidebar.width = args.sidebarWidth;

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <Sidebar.container open={args.open}>
          <Sidebar.head>
            <Sidebar.userDisplay name={"佐藤伸明"} />
          </Sidebar.head>
          <Sidebar.list tabType={args.tabType}>
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

export const basicSidebar = linkList.bind({});

basicSidebar.args = {
  open: false,
  links: sidebarLinks,
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  sidebarWidth: defaultTheme.layout.sidebar.width,
  tabType:false
};
