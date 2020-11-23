import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../../view/component/navigation/navbar/navbar";
import defaultTheme from "../../view/theme/applicationTheme";
import Clock from "../../view/atom/clock/clock";
import SelectButton from "../../view/atom/selectButton/selectButton";

export default {
  title: "WIP/atom/selectButton",
  argTypes: { id: { control: "number" } },
};

const template = (args: any) => {
  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <SelectButton value={1} id={args.id}>
          テスト
        </SelectButton>
      </ThemeProvider>
    </>
  );
};

export const draft = template.bind({});

draft.args = {};
