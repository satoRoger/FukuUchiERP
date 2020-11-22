import { makeStyles, createStyles } from "@material-ui/core";
import { BorderBottom, BorderBottomOutlined } from "@material-ui/icons";
import ExtendTheme from "../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    button: {
      borderRadius:0
    },
    active: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      pointerEvents: "none",
    },
  })
);

export default useStyle;
