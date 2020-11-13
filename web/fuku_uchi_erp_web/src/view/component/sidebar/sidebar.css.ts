import { Theme, makeStyles, createStyles, StyleRules } from '@material-ui/core';

const drawerWidth = 260;

interface ExtendTheme extends Theme {
	layout: { sidebar: { width: number } };
}

const useStyle = makeStyles((theme: ExtendTheme) =>
	createStyles({
		container: {
			border: 'none',
			position: 'fixed',
			top: '0',
			bottom: '0',
			left: '0',
			minWidth: theme.layout.sidebar.width,
			backgroundColor: theme.palette.primary.light,
			overflowY: 'visible',
			[theme.breakpoints.up('md')]: {
				position: 'fixed',
				height: '100vh',
			},
			[theme.breakpoints.down('sm')]: {
				position: 'fixed',
				display: 'block',
				top: '0',
				height: '100vh',
				right: 'auto',
				left: '0',
				zIndex: '1032',
				visibility: 'visible',
				overflowY: 'visible',
				borderTop: 'none',
				textAlign: 'left',
				paddingRight: '0px',
				paddingLeft: '0',
			},
		},
		head: {
			position: 'relative',
			width: '100%',
			height: '70px',
			backgroundColor: theme.palette.secondary.dark,
			color: theme.palette.common.white,
		},
		userDisplayText: {
			display: 'inline-block',
			width: drawerWidth,
			color: 'white',
			fontSize: '1.2em',
			textAlign: 'center',
			margin: '20px 0 0 0',
      height: '2em',
      letterSpacing:theme.spacing(1)
		},
		list: {
			paddingLeft: '0',
			paddingTop: '0',
			paddingBottom: '0',
			marginBottom: '0',
			listStyle: 'none',
			position: 'unset',
			overflow: 'hidden',
		},
		link: {
			width: 'auto',
			margin: '0px 0px 0px 0px',
			position: 'relative',
			display: 'block',
			padding: '10px -10px 0px 10px',
			backgroundColor: 'transparent',
		},
		linkIcon: {
			height: '30px',
			fontSize: '24px',
			lineHeight: '30px',
			float: 'left',
			marginRight: '15px',
			textAlign: 'center',
			verticalAlign: 'middle',
			color: theme.palette.common.white,
			display: 'inline-block',
		},
		linkText: {
			display: 'inline-block',
			color: theme.palette.common.white,
		},
		activeLink: {
			backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      pointerEvents:"none"
		},
		activeLinkIcon: {
      color: theme.palette.common.white,
      pointerEvents:"none"
		},
	})
);

export default useStyle;
