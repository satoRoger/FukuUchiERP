import { Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import useStyles from "./tabbar.css";
import TabPanel from "./tabPanel";

export type TabType = {
  id: number;
  label: string;
  icon: any;
  component?: React.ReactNode;
};

const defaultProps: {
  tabs: TabType[];
} = { tabs: [] };

type Props = typeof defaultProps;

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Tabbar(props: Props) {
  const [value, setValue] = useState(1);
  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  const classes = useStyles();
  return (
    <>
      <div className={classes.tabsContainer}>
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="secondary"
          textColor="secondary"
          className={classes.tabs}
        >
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
      </div>
      <div>
        {props.tabs.map((panel) => {
          return (
            <TabPanel value={value} id={panel.id}>
              {panel.component}
            </TabPanel>
          );
        })}
      </div>
    </>
  );
}
Tabbar.defaultProps = defaultProps;
