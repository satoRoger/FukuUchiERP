import { AppBar, Tab, Tabs } from "@material-ui/core";
import React from "react";
import useState from "react";
import useStyles from "./tabbar.css";

export type TabType = {
  id: number;
  label: string;
  icon: any;
  component?: React.ReactNode;
};

const defaultProps: {
  tabs: TabType[];
  value: number;
  children?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<{}>, value: number) => void;
} = { tabs: [], value: 1 };

type Props = typeof defaultProps;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabbarComponent(props: Props) {
  const classes = useStyles();
  return (
    <>
      <Tabs value={props.value} onChange={props.onChange}>
        {props.tabs.map((tab) => {
          return (
            <Tab
              label={tab.label}
              icon={<tab.icon />}
              value={tab.id}
              {...a11yProps(tab.id)}
            />
          );
        })}
      </Tabs>
      <div>{props.children}</div>
    </>
  );
}
TabbarComponent.defaultProps = defaultProps;
