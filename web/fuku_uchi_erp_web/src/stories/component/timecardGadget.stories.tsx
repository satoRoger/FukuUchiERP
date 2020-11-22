import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../view/theme/applicationTheme";
import TabPanel from "../../view/component/tabbar/tabPanel";
import tabs from "../argsValues/tabsValue";
import TabbarComponent from "../../view/component/tabbar/tabbar";
import TimecardGadget from "../../view/component/timecardGadget/timecardGadget";
import { TimecardAction } from "../../view/component/timecardGadget/timecardGadget";
import actions from "../argsValues/timecardActionValue";

export default {
  title: "WIP/component/timecardGadget",
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
        <TimecardGadget actions={actions}></TimecardGadget>
      </ThemeProvider>
    </>
  );
};

export const draft = template.bind({});

draft.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  tabs: tabs,
  value: 0,
};
