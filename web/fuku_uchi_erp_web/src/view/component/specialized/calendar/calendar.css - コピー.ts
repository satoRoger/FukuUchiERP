import { makeStyles, createStyles } from "@material-ui/core";
import { BorderBottom, BorderBottomOutlined } from "@material-ui/icons";
import ExtendTheme from "../../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
	calendar:{
  display: "flex";
  minHeight: "100%";
  font-family: Arial, Helvetica Neue, Helvetica, sans-serif;
  font-size: 14px;
  margin: 0 auto;
	},
  })
);
export default useStyle;
