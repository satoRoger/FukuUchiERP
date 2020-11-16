import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../view/theme/applicationTheme";
import Tabbar from "../../view/organism/tabbar/tabbar";
import tabs from "../argsValues/tabsValue";

export default {
  title: "WIP/organism/tabbar",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    value: { control: "number" },
  },
};

const template = (args: any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;
  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <Tabbar tabs={args.tabs} />
      </ThemeProvider>
    </>
  );
};

export const basicTabbar = template.bind({});

basicTabbar.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  tabs: tabs,
  value: 0,
};
