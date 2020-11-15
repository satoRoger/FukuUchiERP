import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../../view/component/navbar/navbar";
import defaultTheme from "../../view/theme/applicationTheme";
import Clock from "../../view/atom/clock/clock"

export default {
  title: "WIP/atom/clock",
  argTypes: {
  },
};

const template = (args) => {

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
          <Clock/>
      </ThemeProvider>
    </>
  );
};

export const basicNavbar = template.bind({});

basicNavbar.args = {
};
