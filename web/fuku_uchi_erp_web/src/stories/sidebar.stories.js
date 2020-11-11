import { stringify } from 'querystring';
import React from 'react';
import Sidebar from '../view/component/sidebar/sidebar';
import { containerProps } from '../view/component/sidebar/sidebarContainer';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

export default {
	title: 'WIP/component/sidebar',
	argTypes: {
		textColor: { control: 'color' },
		backgroundColor: { control: 'color' },
		activeTextColor: { control: 'color' },
		activeBackgroundColor: { control: 'color' },
	},
};

const template = (args) => {
	const theme = {
		palette: {
			color: {
				white: args.textColor,
			},
			main: {
				darker: args.activeBackgroundColor,
			},
		},
	};

	return (
		<>
			<ThemeProvider theme={createMuiTheme(theme)}>
				<Sidebar.container open={args.open}>
					<Sidebar.list>
						<Sidebar.link text={args.text} active />
						<Sidebar.link text={'test'} />
						<Sidebar.link text={'test'} />
						<Sidebar.link text={'test'} />
						<Sidebar.link text={'test'} />
						<Sidebar.link text={'test'} />
					</Sidebar.list>
				</Sidebar.container>
			</ThemeProvider>
		</>
	);
};

export const basicSidebar = template.bind({});

basicSidebar.args = { open: false, text: 'tete' };
