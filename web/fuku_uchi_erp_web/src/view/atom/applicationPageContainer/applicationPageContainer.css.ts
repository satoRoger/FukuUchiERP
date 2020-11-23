import { makeStyles, createStyles } from "@material-ui/core";
import ExtendTheme from "../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    page: {
      margin: `${theme.layout.navbar.height}px 0px 0px 0px`,
      padding: 0,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    pageShift: {
      width: `calc(100% - ${theme.layout.sidebar.width}px)`,
      marginLeft: theme.layout.sidebar.width,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  })
);

export default useStyle;
