import { AppBar, Tab, Tabs } from "@material-ui/core";
import React from "react";
import useState from "react";
import useStyles from "./tabbar.css";

const defaultProps: {
  id: number;
  value: number;
  children?: React.ReactNode;
} = { id: 0, value: 0 };


type Props = typeof defaultProps;

export default function TabPanel(props: Props) {
  const classes = useStyles();
  return <>{props.value === props.id && <div>{props.children}</div>}</>;
}
TabPanel.defaultProps = defaultProps;
