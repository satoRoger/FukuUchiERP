import classes from "*.module.css";
import List from "@material-ui/core/List";
import React from "react";

import useStyles from "./sidebar.css";

const defaultProps: { name:string } = {name:"ゲスト"};
type Props = typeof defaultProps;

export default function SidebarUserDisplay(props: Props) {
  const classes = useStyles();
  return (
    <>
    <div>{props.name}</div>
    </>
  );
}

SidebarUserDisplay.defaultProps = defaultProps;
