import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../view/theme/applicationTheme";
import TabPanel from "../../view/component/tabbar/tabPanel";
import tabs from "../argsValues/tabsValue";
import TabbarComponent from '../../view/component/tabbar/tabbarComponent';

export default {
  title: "WIP/component/tabbar",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    value: { control: "number" },
  },
};

const template = (args:any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;
  const [value, setValue] = useState(args.value);
  useEffect(() => {
    setValue(args.value);
  }, [args.value]);

  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: any) => {
    setValue(newValue);
  };
  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <TabbarComponent tabs={args.tabs} value={value} onChange={handleTabChange}>
          <TabPanel value={value} id={0}>
            タブ1
          </TabPanel>
          <TabPanel value={value} id={1}>
            タブ2
          </TabPanel>
          <TabPanel value={value} id={2}>
            タブ3
          </TabPanel>
        </TabbarComponent>
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
