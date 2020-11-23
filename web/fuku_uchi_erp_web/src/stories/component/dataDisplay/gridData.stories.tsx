import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../../view/theme/applicationTheme";
import GridData from "../../../view/component/dataDisplay/gridData/gridData";
import Grid from "@material-ui/core/Grid/Grid";
import gridDataValue from "../../argsValues/gridDataValue";
export default {
  title: "WIP/component/gridData",
  argTypes: {
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    value: { control: "number" },
  },
};

const template = (args: any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <Grid container spacing={3}>
          <Grid item>
            <GridData data={gridDataValue.base} gridName="基本情報" />
          </Grid>
          <Grid item>
            <GridData data={gridDataValue.work} gridName="勤務情報" />
          </Grid>
          <Grid item>
            <GridData data={gridDataValue.welware} gridName="福利厚生" />
          </Grid>
        </Grid>
      </ThemeProvider>
    </>
  );
};

export const gridData = template.bind({});

gridData.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
};
