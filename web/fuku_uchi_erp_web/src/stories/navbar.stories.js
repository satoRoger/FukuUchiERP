import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Navbar from '../view/component/navbar/navbar';

export default {
	title: 'WIP/component/navbar',
	argTypes: {
	},
};

const template = (args) => {
	return (
		<>
        <Navbar.container></Navbar.container>
		</>
	);
};

export const basicNavbar = template.bind({});

basicNavbar.args = {
};
