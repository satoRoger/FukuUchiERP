import React from "react";
import useStyles from "./navbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

export const containerProps: {
} = {
};

type Props = typeof containerProps;

export default function NavbarContaniner(props: Props) {
  const classes = useStyles();
  return (
    <>
    <AppBar>
      <Toolbar>
        
      </Toolbar>
    </AppBar>
    </>
  );
}
NavbarContaniner.defaultProps = containerProps;
