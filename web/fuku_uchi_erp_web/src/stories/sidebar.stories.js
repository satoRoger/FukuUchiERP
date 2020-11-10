import { stringify } from "querystring";
import React from "react";
import Sidebar from "../view/component/sidebar/sidebar";
import { containerProps } from "../view/component/sidebar/sidebarContainer";
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

export default {
  title: "WIP/component/sidebar"
};

const theme = createMuiTheme({
  palette: {
	  color:{
		white: orange[500],
		},
	main:{
		darker:orange[500],
	}
  }
});

const template = (args) => (
  <>
  <ThemeProvider theme={theme}>
    <Sidebar.container open={args.open}>
      <Sidebar.list>
        <Sidebar.link text={args.text} active/>
        <Sidebar.link text={"test"} />
        <Sidebar.link text={"test"} />
        <Sidebar.link text={"test"} />
        <Sidebar.link text={"test"} />
        <Sidebar.link text={"test"} />
      </Sidebar.list>
    </Sidebar.container>
	</ThemeProvider>
  </>
);

export const basicSidebar = template.bind({});

basicSidebar.args = { open: false ,text:"tete"};
