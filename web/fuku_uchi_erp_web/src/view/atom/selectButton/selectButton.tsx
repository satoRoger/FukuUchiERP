import { AppBar, Button, Tab, Tabs } from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import useStyles from "./selectButton.css";

const defaultProps: {
  value: any;
  id: any;
  onChange?: (_: React.ChangeEvent<{}>, newValue: number) => void;
  children?: React.ReactNode;
} = { value: undefined, id: undefined };

type Props = typeof defaultProps;

export default function SelectButton(props: Props) {
  const active = props.value && props.id && props.id == props.value;

  const classes = useStyles();
  return (
    <>
      <Button
        href=""
        variant="outlined"
        color="default"
        className={clsx(classes.button, { [classes.active]: active })}
        onClick={(e) => {
          props.onChange && props.onChange(e, props.id);
        }}
      >
        {props.children}
      </Button>
    </>
  );
}
SelectButton.defaultProps = defaultProps;
