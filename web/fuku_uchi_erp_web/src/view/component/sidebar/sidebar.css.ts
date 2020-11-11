import { Theme, makeStyles, createStyles, StyleRules } from "@material-ui/core";

const drawerWidth = 260;

const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    drawerPaper: {
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      width: theme.layout.sidebar.width,
      [theme.breakpoints.up("md")]: {
        width: theme.layout.sidebar.width,
        position: "fixed",
        height: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: theme.layout.sidebar.width,
        position: "fixed",
        display: "block",
        top: "0",
        height: "100vh",
        right: "auto",
        left: "0",
        zIndex: "1032",
        visibility: "visible",
        overflowY: "visible",
        borderTop: "none",
        textAlign: "left",
        paddingRight: "0px",
        paddingLeft: "0",
        transform: `translate3d(${theme.layout.sidebar.width}px, 0, 0)`,
      },
    },
    list: {
      marginTop: "20px",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset",
	  overflow:"hidden"
    },
    link: {
      width: "auto",
      margin: "10px 0px 0px 0px",
      position: "relative",
      display: "block",
      padding: "10px -10px 0px 10px",
      backgroundColor: "transparent",
    },
    activeLink: {
      backgroundColor: theme.palette.main.darker,
      color: theme.palette.color.white,
    },
  })
);

export default useStyle;
