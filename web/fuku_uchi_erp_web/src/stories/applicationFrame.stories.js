import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import ApplicationFrame from '../view/template/applicationFrame/applicationFrame';
import sidebarLinks from './argsValues/sidebarLinksValue';

export default {
	title: 'WIP/template/applicationFrame',
	argTypes: {
		primaryColor: { control: 'color' },
		secondaryColor: { control: 'color' },},
};

const template = (args) => {
	const theme = {
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
				<ApplicationFrame username="佐藤伸明" links={args.links}></ApplicationFrame>
			</ThemeProvider>
		</>
	);
};

export const applicationFrame = template.bind({});

applicationFrame.args = {
	primaryColor: '#005f63',
	secondaryColor: '#419E49',
	links: sidebarLinks,
};
