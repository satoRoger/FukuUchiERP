import classes from "*.module.css";
import List from "@material-ui/core/List";
import React from "react";

import useStyles from "./sidebar.css";

const defaultProps: { children?: React.ReactNode } = {};
type Props = typeof defaultProps;

export default function SidebarLinkList(props: Props) {
  const classes = useStyles();
  return (
    <>
      <List className={classes.list}>{props.children}</List>
    </>
  );
}

SidebarLinkList.defaultProps = defaultProps;
