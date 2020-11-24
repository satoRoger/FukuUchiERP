import { makeStyles, createStyles } from "@material-ui/core";
import { callbackify } from "util";
import ExtendTheme from "../../../theme/extendTheme";
const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    gridName: {},
    container: {
      marginLeft: theme.spacing(2),
      width: `calc(100%-${theme.spacing(2)}px)`,
    },
    attribute: {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
      width: "150px",
    },
    value: {
    },
    textBox: {
      outline: `solid 1px ${theme.palette.grey[700]}`,
    },
    text: {
      margin:"5px",
      letterSpacing: "1px",
    },
    attributeText: {
      flexWrap: "nowrap",
    },
    valueText: {},
  })
);
export default useStyle;
