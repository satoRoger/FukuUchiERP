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
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      width: "150px",
	  outline:"solid 1px black"
    },
    textBox: {
      outline: `solid 1px ${theme.palette.grey[700]}`,
    },
    text: {
		diplay:"inline-block",
		height:"24px",
      margin:"auto 5px",
	  padding:"16px 0",
      letterSpacing: "1px",
    }
  })
);
export default useStyle;
