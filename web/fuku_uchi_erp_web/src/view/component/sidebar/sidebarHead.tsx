import React from 'react';

import useStyles from './sidebar.css';

const headProps: { children?: React.ReactNode } = {};
type Props = typeof headProps;
export default function SidebarHead(props: Props = headProps) {
	const classes = useStyles();
	return <div className={classes.head}>{props.children}</div>;
}
