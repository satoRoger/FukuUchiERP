import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import useStyles from "./sidebar.css";
import Link from "next/link";
import clsx from "clsx";

const defaultProps: {
  id: number;
  value: number;
  text: string;
  onClick?: (event: React.ChangeEvent<{}>, value: any) => void;
  icon?: any;
} = {
  id: 0,
  value: 0,
  text: "",
};
type Props = typeof defaultProps;

export default function SidebarLink(props: Props) {
  const active = props.id === props.value;
  const classes = useStyles();
  return (
    <>
      <ListItem
        onClick={(e) => {
          if (props.onClick) {
            props.onClick(e, props.id);
          }
        }}
        button
        className={clsx(classes.link, { [classes.activeLink]: active })}
      >
        {props.icon && (
          <props.icon
            className={clsx(classes.linkIcon, {
              [classes.activeLinkIcon]: active,
            })}
          />
        )}
        <ListItemText
          className={clsx(classes.linkText, {
            [classes.activeLinkText]: active,
          })}
          primary={props.text}
        />
      </ListItem>
    </>
  );
}

SidebarLink.defaultProps = defaultProps;
