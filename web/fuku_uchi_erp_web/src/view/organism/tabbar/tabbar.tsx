import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import SidebarComponent from "../../component/sidebar/sidebarComponent";
import { LinkParameter } from "../../component/sidebar/sidebarLink";
import TabPanel from "../../component/tabbar/tabPanel";
import TabbarComponent from "../../component/tabbar/tabbarComponent";
import { TabType } from "../../component/tabbar/tabbarComponent";

const defaultProps: {
  tabs: TabType[];
} = { tabs: [] };

type Props = typeof defaultProps;

export default function Tabbar(props: Props) {
  const [value, setValue] = useState(1);
  const handleTabChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
    console.log(value);
  };
  return (
    <>
      <TabbarComponent
        tabs={props.tabs}
        value={value}
        onChange={handleTabChange}
      >
        {props.tabs.map((tab) => {
          return (
            <TabPanel value={value} id={tab.id}>
              {tab.component}
            </TabPanel>
          );
        })}
      </TabbarComponent>
    </>
  );
}
Tabbar.defaultProps = defaultProps;
