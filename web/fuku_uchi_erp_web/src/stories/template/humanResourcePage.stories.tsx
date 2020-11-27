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
import UserDisplay from "../../view/component/dataDisplay/userDisplay/userDisplay";
import GridData from "../../view/component/dataDisplay/gridData/gridData";
import gridDataValue from "../argsValues/gridDataValue";
import Grid from "@material-ui/core/Grid";

export default {
  title: "WIP/template/applicationPage/humanResource",
  argTypes: {
    sidebarState: {
      control: { type: "select", options: ["permanent", "open", "close"] },
    },
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
  },
};


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
          <UserDisplay familiyName="佐藤" givenName="伸明" /><Grid container spacing={3}>
            <Grid item>
              <GridData
                data={gridDataValue.base}
                gridName="基本情報"
                editable={args.editable}
              />
            </Grid>
            <Grid item>
              <GridData data={gridDataValue.work} gridName="勤務情報" />
            </Grid>
            <Grid item>
              <GridData data={gridDataValue.welware} gridName="福利厚生" />
            </Grid>
          </Grid>
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
};
