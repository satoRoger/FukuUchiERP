import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../../view/theme/applicationTheme";
import TimecardTable from "../../../view/component/dataDisplay/dataTable/timecardTable";
import { DateTime } from "luxon";
import timecardTableData from "../../argsValues/timecardTableValue";
import { TimecardTableCulumns } from "../../../view/component/dataDisplay/dataTable/timecardTable";

export default {
  title: "WIP/component/dataTable",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    value: { control: "number" },
  },
};

const template = (args: any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;

  const displayCulumns: (keyof TimecardTableCulumns)[] = [
    "date",
    "intime",
    "outtime",
    "inbreak",
    "outbreak",
    "sum",
  ];

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <TimecardTable
          data={timecardTableData}
          displayCulumns={displayCulumns}

        ></TimecardTable>
      </ThemeProvider>
    </>
  );
};

export const basicDataTable = template.bind({});

basicDataTable.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
};
