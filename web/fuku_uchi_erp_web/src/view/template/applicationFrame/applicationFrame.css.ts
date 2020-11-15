import { Theme, makeStyles, createStyles, StyleRules } from "@material-ui/core";

interface ExtendTheme extends Theme {
  layout: { sidebar: { width: number } };
}

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    background: {
      zIndex: -1024,
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: theme.palette.background.paper,
    },
  })
);

export default useStyle;
