import { makeStyles, createStyles } from "@material-ui/core";
import ExtendTheme from "../../theme/extendTheme";


const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    container: {
      border: "none",
      position: "relative",
      width: theme.layout.sidebar.width,
      backgroundColor: theme.palette.primary.light,
      overflowY: "visible",
      height: "100vh",
    },
    head: {
      position: "relative",
      width: "100%",
      height: "70px",
      backgroundColor: theme.palette.secondary.dark,
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
      margin: "0",
      position: "relative",
      display: "block",
      backgroundColor: "transparent",
    },
    linkIcon: {
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "15px",
      textAlign: "center",
      verticalAlign: "middle",
      color: theme.palette.common.white,
      display: "inline-block",
    },
    linkText: {
      display: "inline-block",
      color: theme.palette.common.white,
    },
    activeLink: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      pointerEvents: "none",
    },
    activeLinkIcon: {
      color: theme.palette.common.white,
      pointerEvents: "none",
    },
  })
);

export default useStyle;
