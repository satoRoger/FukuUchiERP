import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import ApplicationFrame from "../../view/template/applicationFrame/applicationFrame";
import sidebarLinks from "../argsValues/sidebarLinksValue";
import defaultTheme from "../../view/theme/applicationTheme";
import Tabbar from "../../view/component/navigation/tabbar/tabbar";
import AddToHomeScreenIcon from "@material-ui/icons/AddToHomeScreen";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import { TabType } from "../../view/component/navigation/tabbar/tabbar";
import TimecardTable from "../../view/component/dataDisplay/dataTable/timecardTable";
import { DateTime } from "luxon";
import TimecardGadget from "../../view/organism/timecardGadget/timecardGadget";
import actions from "../argsValues/timecardActionValue";
import timecardTableData from "../argsValues/timecardTableValue";
import { TimecardTableCulumns } from "../../view/component/dataDisplay/dataTable/timecardTable";

export default {
  title: "WIP/template/applicationPage/timecard",
  argTypes: {
    sidebarState: {
      control: { type: "select", options: ["permanent", "open", "close"] },
    },
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
  },
};

const displayCulumns: (keyof TimecardTableCulumns)[] = [
  "date",
  "intime",
  "outtime",
];

const timecardTab: TabType[] = [
  {
    id: 1,
    label: "出退勤",
    icon: AddToHomeScreenIcon,
    component: (
      <div>
        <TimecardGadget actions={actions} />
      </div>
    ),
  },
  {
    id: 2,
    label: "出退勤履歴",
    icon: AccountTreeIcon,
    component: (
      <div>
        <TimecardTable
          data={timecardTableData}
          displayCulumns={displayCulumns}
        />
      </div>
    ),
  },
];

const template = (args: any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;
  defaultTheme.layout.sidebar.width = args.sidebarWidth;

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <ApplicationFrame
          username="佐藤伸明"
          links={args.links}
          sidebarState={args.sidebarState}
        >
          <Tabbar tabs={args.tabs} />
        </ApplicationFrame>
      </ThemeProvider>
    </>
  );
};

export const draft = template.bind({});

draft.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  sidebarWidth: defaultTheme.layout.sidebar.width,
  links: sidebarLinks,
  sidebarState: "permanent",
  tabs: timecardTab,
};
