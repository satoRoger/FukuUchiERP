import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import classNames from "classnames";
import useStyles from "./sidebar.css";

const defaultProps: { text: string; active: boolean } = {
  text: "",
  active: false,
};
type Props = typeof defaultProps;

export default function SidebarLink(props: Props) {
  const classes = useStyles();
  const activeLink = classNames({ [" " + classes["activeLink"]]: props.active });
  return (
    <>
      <ListItem button className={classNames(classes.link, activeLink)}>
        <ListItemText primary={props.text} />
      </ListItem>
    </>
  );
}

SidebarLink.defaultProps = defaultProps;
