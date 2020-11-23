import React, { useState } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Navbar from "../../../view/component/navigation/navbar/navbar";
import defaultTheme from "../../../view/theme/applicationTheme";
import SelectButtonGroup from "../../../view/component/inputItem/selectButtonGroup/selectButtonGroup";
import SelectButton from "../../../view/atom/selectButton/selectButton";

export default {
  title: "WIP/component/selectButtonGroup",
  argTypes: {
    sidebarOpen: { control: "boolean" },
    primaryColor: { control: "color" },
    secondaryColor: { control: "color" },
    sidebarWidth: { control: { type: "range", min: 50, max: 1000, step: 10 } },
  },
};

const selectOptions = [
  { id: 1, text: "その1" },
  { id: 2, text: "その2" },
  { id: 3, text: "その3" },
];

const template = (args: any) => {
  defaultTheme.palette.primary.main = args.primaryColor;
  defaultTheme.palette.secondary.main = args.secondaryColor;

  const [value, setValue] = useState(0);

  const handleChange = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <ThemeProvider theme={createMuiTheme(defaultTheme)}>
        <SelectButtonGroup>
          {selectOptions.map((option) => {
            return (
              <SelectButton
                id={option.id}
                value={value}
                onChange={handleChange}
              >
                {option.text}
              </SelectButton>
            );
          })}
        </SelectButtonGroup>
      </ThemeProvider>
    </>
  );
};

export const basicNavbar = template.bind({});

basicNavbar.args = {
  primaryColor: defaultTheme.palette.primary.main,
  secondaryColor: defaultTheme.palette.secondary.main,
  sidebarWidth: defaultTheme.layout.sidebar.width,
};
