import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../view/theme/applicationTheme";
import AppicationPageContainer from "../../view/component/applicationPageContainer/applicationPageContainer";

export default {
  title: "WIP/component/applicationPage",
  argTypes: {
    sidebarOpen: { control: "boolean" },
  },
};

const template = (args) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;
  defaultTheme.layout.sidebar.width = args.sidebarWidth;

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <AppicationPageContainer sidebarOpen={args.sidebarOpen}>テスト</AppicationPageContainer>
      </ThemeProvider>
    </>
  );
};

export const appicationPageContainer = template.bind({});

appicationPageContainer.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  sidebarWidth: defaultTheme.layout.sidebar.width,
};
