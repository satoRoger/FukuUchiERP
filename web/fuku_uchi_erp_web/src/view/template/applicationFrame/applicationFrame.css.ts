import { Theme, makeStyles, createStyles, StyleRules } from "@material-ui/core";
import ApplicationFrame from "./applicationFrame";

const drawerWidth = 260;

interface ExtendTheme extends Theme {
  layout: { sidebar: { width: number } };
}

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    applicationFrame: {
      position: "fixed",
      display: "flex",
      top: 0,
      left: 0,
    },
    sidebar: {},
    navbar: {
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    content: {
      flex: "auto",
    },
  })
);

export default useStyle;
