import React from "react";
import useStyles from "./navbar.css";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import clsx from "clsx";

const defaultProps: { sidebarOpen: boolean } = { sidebarOpen: false };

type Props = typeof defaultProps;

export default function NavbarContaniner(props: Props) {
  const classes = useStyles();
  return (
    <>
      <AppBar
        className={clsx(classes.appbar, {
          [classes.appbarShift]: props.sidebarOpen,
        })}
      >
        <Toolbar className={classes.toolbar} variant={"dense"}>
          <Typography variant="h6">News</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
NavbarContaniner.defaultProps = defaultProps;
