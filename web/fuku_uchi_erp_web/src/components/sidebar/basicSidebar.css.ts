import { Theme, createStyles, StyleRules } from "@material-ui/core";

const style = (theme: Theme): StyleRules =>
  createStyles({
    username: {
      fontSize:60,
      color: "red",
    },
  });
export default style;
