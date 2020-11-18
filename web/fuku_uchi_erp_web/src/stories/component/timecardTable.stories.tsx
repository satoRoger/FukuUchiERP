import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../view/theme/applicationTheme";
import TimecardSimpleTable from "../../view/component/dataTable/timecardSimpleTable";
import { DateTime } from "luxon";

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
  const data = [
    {
      date: DateTime.local(),
      inTime: DateTime.local(),
      outTime: DateTime.local(),
    },
  ];

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <TimecardSimpleTable data={data}></TimecardSimpleTable>
      </ThemeProvider>
    </>
  );
};

export const basicDataTable = template.bind({});

basicDataTable.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
};
