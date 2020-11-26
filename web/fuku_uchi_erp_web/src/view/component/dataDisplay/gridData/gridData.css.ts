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
      position: "relative",
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.common.white,
      width: "150px",
      outline:`solid 1px ${theme.palette.grey[900]}`
    },
    attributeText: {
      position: "absolute",
      whiteSpace:"nowrap",
      top: "50%",
      left: "5%",
      transform: "translateY(-50%) translateX(0%)",
    },
    textBox: {
      outline: `solid 1px ${theme.palette.grey[700]}`,
    },
    text: {
      letterSpacing: "1px",
    },
    noHover: {
      pointerEvents: "none",
    },
    editableText: {
      "& input:valid + fieldset": {
        borderColor: theme.palette.secondary.main,
      },
    },
  })
);
export default useStyle;
