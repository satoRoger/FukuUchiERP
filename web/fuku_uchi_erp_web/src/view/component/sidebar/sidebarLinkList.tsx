import List from "@material-ui/core/List";
import React from "react";

import useStyles from "./sidebar.css";

const defaultProps: { value: number; children?: React.ReactNode } = {
  value: 0,
};
type Props = typeof defaultProps;

export default function SidebarLinkList(props: Props) {
  const classes = useStyles({ value: props.value });
  return (
    <>
      <List className={classes.list}>
        <div className={classes.activeLine}></div>
        {props.children}
      </List>
    </>
  );
}

SidebarLinkList.defaultProps = defaultProps;
