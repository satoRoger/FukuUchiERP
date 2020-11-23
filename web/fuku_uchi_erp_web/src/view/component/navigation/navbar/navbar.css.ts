import { makeStyles, createStyles } from "@material-ui/core";
import ExtendTheme from "../../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    appbar: {
      backgroundColor: theme.palette.primary.dark,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appbarShift: {
      width: `calc(100% - ${theme.layout.sidebar.width}px)`,
      marginLeft: theme.layout.sidebar.width,
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    toolbar: {
      minHeight:theme.layout.navbar.height
    },
  })
);

export default useStyle;
