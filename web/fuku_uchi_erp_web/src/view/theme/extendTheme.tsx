import { Theme } from "@material-ui/core/styles";

export default interface ExtendTheme extends Theme {
  layout: {
    sidebar: { width: number };
    navbar: { height: number };
  };
}
