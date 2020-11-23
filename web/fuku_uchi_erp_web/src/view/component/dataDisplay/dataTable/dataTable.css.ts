import { makeStyles, createStyles } from "@material-ui/core";
import ExtendTheme from "../../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    container: {
      border: `solid 1px ${theme.palette.grey[400]}`,
      maxHeight: "80vh",
    },
    table: {
    },
    test: {
      backgroundColor: "red",
      overflow:"auto"
    },
    head: {
      color: "white",
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.dark,
      position: "sticky",
      top: 0
    },
  })
);

export default useStyle;
