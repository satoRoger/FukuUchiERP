import React, { useState, useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import defaultTheme from "../../../view/theme/applicationTheme";
import GridData from "../../../view/component/dataDisplay/gridData/gridData";
import { GridDataType } from "../../../view/component/dataDisplay/gridData/gridData";
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

  const data: GridDataType[] = [
    { attribute: "誕生日", value: "1994/4/23" },
    { attribute: "住所", value: "愛知県岡崎市向山町" },
    { attribute: "電話", value: "000-0000-0000" },
    { attribute: "緊急連絡先", value: "000-0000-0000" },
    { attribute: "メール", value: "000-0000-0000" },
    { attribute: "扶養者", value: "000-0000-0000" },
    { attribute: "所属", value: "000-0000-0000" },
    { attribute: "社員コード", value: "000-0000-0000" },
    { attribute: "勤務形態", value: "000-0000-0000" },
    { attribute: "非常勤出勤曜日", value: "000-0000-0000" },
    { attribute: "職種", value: "000-0000-0000" },
    { attribute: "社会保険 記号", value: "000-0000-0000" },
    { attribute: "社会保険 番号", value: "000-0000-0000" },
    { attribute: "入社日", value: "000-0000-0000" },
    { attribute: "退社日", value: "000-0000-0000" },
    
  ];

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <GridData data={data} />
      </ThemeProvider>
    </>
  );
};

export const gridData = template.bind({});

gridData.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
};
