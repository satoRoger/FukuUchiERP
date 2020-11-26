import { makeStyles, createStyles } from "@material-ui/core";
import { Height } from "@material-ui/icons";
import ExtendTheme from "../../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    avatar: {
      marginLeft: "auto",
      marginRight:"50px",
      backgroundColor: theme.palette.primary.dark,
      [theme.breakpoints.down("xl")]: {
        width: "200px",
        height: "200px",
        fontSize: "70px",
      },
      [theme.breakpoints.down("xs")]: {
        width: "100px",
        height: "100px",
        fontSize: "35px",
      },
    },
    avatarGrid: {},
    fullName: {
      display: "flex",
    },
    name: {
      margin: "auto 5px",
      letterSpacing: "4px",
      
      display: "inline-block",
    },
  })
);
export default useStyle;
