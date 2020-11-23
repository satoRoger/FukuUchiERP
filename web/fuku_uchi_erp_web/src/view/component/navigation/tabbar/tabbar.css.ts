import { makeStyles, createStyles } from "@material-ui/core";
import { BorderBottom, BorderBottomOutlined } from "@material-ui/icons";
import ExtendTheme from "../../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    tabs: {
      marginBottom: "5px",
    },
    tabsContainer: {
      boxShadow: `0px 2px 5px -1px rgba(0, 0, 0, 0.2)`,
    },
  })
);

export default useStyle;
