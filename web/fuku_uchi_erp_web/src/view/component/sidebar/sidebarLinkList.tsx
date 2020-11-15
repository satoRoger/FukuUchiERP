import List from "@material-ui/core/List";
import React from "react";

import useStyles from "./sidebar.css";

const defaultProps: { tabStyle: boolean; children?: React.ReactNode } = {
  tabStyle: false,
};
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
