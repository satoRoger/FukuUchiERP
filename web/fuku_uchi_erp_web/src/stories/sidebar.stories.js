import { stringify } from 'querystring';
import React from 'react';
import Sidebar from '../view/component/sidebar/sidebar';
import { containerProps } from '../view/component/sidebar/sidebarContainer';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
import Dashboard from '@material-ui/icons/Dashboard';

export default {
	title: 'WIP/component/sidebar',
	argTypes: {
		primaryColor: { control: 'color' },
		secondaryColor: { control: 'color' },
    sidebarWidth: { control: { type: 'range', min: 50, max: 1000, step: 10 } },
    links:{control:{type:"array",separator:","}},
	onClick:{action:"clicked"}
	},
};

const template = (args) => {
	const theme = {
		palette: {
      primary: { main: args.primaryColor },
      secondary:{main:args.secondaryColor}
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
				<Sidebar.container open={args.open}>
          <Sidebar.head>
            <Sidebar.userDisplay name={"佐藤伸明"}/>
          </Sidebar.head>
					<Sidebar.list>
            {args.links.map((link)=>{
              return (<Sidebar.link text={link.text} icon={link.icon} active={link.active} onClick={args.onClick}/>)
            })}
					</Sidebar.list>
				</Sidebar.container>
			</ThemeProvider>
		</>
	);
};

export const basicSidebar = template.bind({});

const links=
[{id:"dashboard",url:"url",text:"ダッシュボード",icon:Dashboard,active:true},
{id:"dashboard",url:"url",text:"タイムカード",icon:Dashboard,active:false},
{id:"dashboard",url:"url",text:"社内カレンダー",icon:Dashboard,active:false},
{id:"dashboard",url:"url",text:"dashboard",icon:Dashboard,active:false},
{id:"dashboard",url:"url",text:"dashboard",icon:Dashboard,active:false}]

basicSidebar.args = {
	sidebarWidth: 220,
	primaryColor: '#005f63',
	secondaryColor: '#419E49',
	open: false,
  text: 'tete',
  links:links
};
