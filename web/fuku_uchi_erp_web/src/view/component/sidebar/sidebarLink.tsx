import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import classNames from "classnames";
import useStyles from "./sidebar.css";
import Link from 'next/link'

const defaultProps: { text: string; active: boolean ;onClick?:any,icon?:any} = {
  text: "",
  active: false,
};
type Props = typeof defaultProps;

export default function SidebarLink(props: Props) {
  const classes = useStyles();
  const activeLinkIcon = classNames({ [" " + classes["activeLinkIcon"]]: props.active });
  const activeLink = classNames({ [" " + classes["activeLink"]]: props.active });
  return (
    <>
	  <a onClick={props.onClick}>
      <ListItem button className={classNames(classes.link, activeLink)}>
        {props.icon&&<props.icon className={classNames(classes.linkIcon,activeLinkIcon)}/>}
        <ListItemText className={classes.linkText} primary={props.text} />
      </ListItem>
	  </a>
    </>
  );
}

SidebarLink.defaultProps = defaultProps;
