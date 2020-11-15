import { AppBar, Tab, Tabs } from "@material-ui/core";
import React from "react";
import useState from "react";
import useStyles from "./tabbar.css";

type TabType = {
  label?: string;
  disabled?: boolean;
  value?: any;
  icon?: any;
};

const defaultProps: {
  tabs: TabType[];
  value: number;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, value: any) => void;
} = { tabs: [], value: 0 };

type Props = typeof defaultProps;

export default function Tabbar(props: Props) {
  const classes = useStyles();
  return (
    <>
      <Tabs value={props.value} onChange={props.onChange}>
        {props.tabs.map((tab) => {
          return (
            <Tab label={tab.label} icon={<tab.icon />} value={tab.value} />
          );
        })}
      </Tabs>
      <div>{props.children}</div>
    </>
  );
}
Tabbar.defaultProps = defaultProps;
