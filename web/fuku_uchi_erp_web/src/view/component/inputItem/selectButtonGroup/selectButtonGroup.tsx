import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./selectButtonGroup.css";

const defaultProps: {
  value: any;
  children?: React.ReactNode;
} = { value: undefined };

type Props = typeof defaultProps;

export default function SelectButtonGroup(props: Props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.group}>{props.children}</div>
    </>
  );
}
SelectButtonGroup.defaultProps = defaultProps;
