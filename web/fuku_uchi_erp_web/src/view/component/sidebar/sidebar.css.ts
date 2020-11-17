import { makeStyles, createStyles } from "@material-ui/core";
import ExtendTheme from "../../theme/extendTheme";

const linkHeight = 60;
const linkMargin = 5;

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
      boxShadow: `2px 2px 5px rgba(0, 0, 0, 0.2)`,
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
      height: "100vh",
      paddingLeft: "0",
      paddingTop: "0",
      paddingBottom: "0",
      marginBottom: "0",
      listStyle: "none",
      position: "relative",
      overflow: "hidden",
    },
    link: {
      width: "100%",
      height: linkHeight,
      position: "relative",
      display: "block",
      margin: "5px 0",
      padding:0
    },

    linkContent: {
      display:"inline-block",
      position: "absolute",
      top: "50%",
      left: "50%",
      width:"60%",
      transform: "translateY(-50%) translateX(-60%)",
    },

    linkIcon: {
      height: "30px",
      fontSize: "24px",
      lineHeight: "30px",
      float: "left",
      marginRight: "7px",
      color: theme.palette.common.black,
      display: "inline-block",
    },
    linkText: {
      display: "inline-block",
      color: theme.palette.common.black,
    },
    activeLink: {
      pointerEvents: "none",
    },
    activeLinkIcon: {
      color: theme.palette.secondary.dark,
      pointerEvents: "none",
    },
    activeLinkText: {
      color: theme.palette.secondary.dark,
    },
    activeLine: {
      position: "absolute",
      height: linkHeight,
      top: (props: { value: number }) =>
        linkMargin + (linkMargin + linkHeight) * props.value,
      left: theme.layout.sidebar.width - 5,
      width: "5px",
      backgroundColor: theme.palette.secondary.light,
      transition: `all 0.2s 0s`,
    },
  })
);

export default useStyle;
