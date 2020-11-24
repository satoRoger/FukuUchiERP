import { makeStyles, createStyles } from "@material-ui/core";
import { BorderBottom, BorderBottomOutlined } from "@material-ui/icons";
import ExtendTheme from "../../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    flexBox: {
      display: "flex",
      minHeight: "100%",
      fontFamily: " Arial, Helvetica Neue, Helvetica, sans-serif",
      fontSize: "14px",
    },
    calendar: {
      flexGrow: 1,
      margin: "0 auto",
    },
  })
);
export default useStyle;
