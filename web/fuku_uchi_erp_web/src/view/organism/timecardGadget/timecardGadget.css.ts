import { makeStyles, createStyles } from "@material-ui/core";
import { BorderBottom, BorderBottomOutlined } from "@material-ui/icons";
import ExtendTheme from "../../theme/extendTheme";

const useStyle = makeStyles((theme: ExtendTheme) =>
  createStyles({
    root: {},
    media: {
      height: 0,
      paddingTop: "25.25%", // 16:9
    },
    clock: {
      position: "absolute",
      margin: "5px",
      color: "white",
      fontSize: "2rem",
    },
    cardActions: {
      marginTop:"30px"
    },
    actions: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      
    },
    action: {flexGrow:1},
    actionText: {},
    caption: {
      marginBottom:"-5px"
    },
    transparent: {
      color:"transparent"
    },
    fillActionText: {
      color: theme.palette.primary.dark,
      fontWeight: "bold",
    },
    fillIcon: {
      color: theme.palette.primary.dark,
    },
    icon: {
      float: "left",
      marginRight: "6px",
      display: "inline-block",
    },
  })
);

export default useStyle;
