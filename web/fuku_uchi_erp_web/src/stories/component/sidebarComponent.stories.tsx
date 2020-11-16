import React, { useState } from "react";
import SidebarComponent from "../../view/component/sidebar/sidebarComponent";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import sidebarLinks from "../argsValues/sidebarLinksValue";
import defaultTheme from "../../view/theme/applicationTheme";
import { LinkParameter } from "../../view/component/sidebar/sidebarLink";

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

const linkList = (args: any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;
  defaultTheme.layout.sidebar.width = args.sidebarWidth;

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <SidebarComponent.container open={args.open}>
          <SidebarComponent.head>
            <SidebarComponent.userDisplay name={"佐藤伸明"} />
          </SidebarComponent.head>
          <SidebarComponent.list value={0}>
            {args.links.map((link: LinkParameter) => {
              return (
                <SidebarComponent.link
                  id={link.id}
                  value={0}
                  text={link.text}
                  icon={link.icon}
                />
              );
            })}
          </SidebarComponent.list>
        </SidebarComponent.container>
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
