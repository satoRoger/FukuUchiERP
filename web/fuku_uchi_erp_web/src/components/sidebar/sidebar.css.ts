import { Theme, createStyles, StyleRules } from "@material-ui/core";

const drawerWidth = 260;

const style = (theme: Theme): StyleRules =>
  createStyles({
    username: {
      fontSize: 20,
      color: "red",
    },
    drawerPaper: {
      border: "none",
      position: "fixed",
      top: "0",
      bottom: "0",
      left: "0",
      width: drawerWidth,

      [theme.breakpoints.up("md")]: {
        width: drawerWidth,
        position: "fixed",
        height: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        width: drawerWidth,
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
        transform: `translate3d(${drawerWidth}px, 0, 0)`,
      },
    },
  });
  
export default style;
