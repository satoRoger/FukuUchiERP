import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../../view/theme/applicationTheme";
import UserDisplay from '../../../view/component/dataDisplay/userDisplay/userDisplay';

export default {
  title: "WIP/component/userDispay",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
  },
};

const template = (args: any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <UserDisplay familiyName="佐藤" givenName="伸明"></UserDisplay>
      </ThemeProvider>
    </>
  );
};

export const userDisplay = template.bind({});

userDisplay.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
};
