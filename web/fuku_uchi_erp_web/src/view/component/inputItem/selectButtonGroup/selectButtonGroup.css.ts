import { makeStyles, createStyles } from "@material-ui/core";
import { BorderBottom, BorderBottomOutlined } from "@material-ui/icons";
import ExtendTheme from "../../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    group: {
      display: "flex",
    },
  })
);

export default useStyle;
