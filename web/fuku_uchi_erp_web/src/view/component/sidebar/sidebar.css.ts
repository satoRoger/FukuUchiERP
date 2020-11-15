import { makeStyles, createStyles } from "@material-ui/core";
import ExtendTheme from "../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    container: {
      border: "none",
      top: 0,
      left: 0,
      position: "fixed",
      width: theme.layout.sidebar.width,
      backgroundColor: theme.palette.common.white,
      overflowY: "visible",
      height: "100vh",
      boxShadow:`2px 2px 5px rgba(0, 0, 0, 0.2)`
    },
    head: {
      position: "relative",
      width: "100%",
      height: "70px",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
    userDisplayText: {
      display: "inline-block",
      width: theme.layout.sidebar.width,
      color: "white",
      fontSize: "1.2em",
      textAlign: "center",
      margin: "20px 0 0 0",
      height: "2em",
      letterSpacing: theme.spacing(1),
    },
    list: {
      height:"100vh",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "unset",
      overflow: "hidden",
    },
    link: {
      width: "auto",
      position: "relative",
      display: "block",
      backgroundColor: "transparent",
      margin: "5px 0",
    },
    linkIcon: {
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color: theme.palette.common.black,
      display: "inline-block",
    },
    linkText: {
      display: "inline-block",
      color: theme.palette.common.black,
    },
    activeLink: {
      borderRight: `solid 5px ${theme.palette.secondary.light}`,
      pointerEvents: "none",
    },
    activeLinkIcon: {
      color: theme.palette.primary.dark,
      pointerEvents: "none",
    },
    activeLinkText: {
      color: theme.palette.primary.dark,
    },
  })
);

export default useStyle;
