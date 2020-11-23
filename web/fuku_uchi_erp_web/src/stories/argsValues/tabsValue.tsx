import React from "react";
import Dashboard from "@material-ui/icons/Dashboard";
import { TabType } from "../../view/component/navigation/tabbar/tabbar";

const tabs: TabType[] = [
  {
    label: "タブ１",
    id: 1,
    icon: Dashboard,
    component: <div>タブ1</div>,
  },
  {
    label: "タブ２",
    id: 2,
    icon: Dashboard,
    component: <div>タブ2</div>,
  },
  {
    label: "タブ３",
    id: 3,
    icon: Dashboard,
    component: <div>タブ3</div>,
  },
];

export default tabs;
