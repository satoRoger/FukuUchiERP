import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import useStyles from "./sidebar.css";
import clsx from "clsx";
import { Typography } from "@material-ui/core";

export type LinkParameter = {
  id: number;
  value: number;
  text: string;
  href: string;
  onClick?: (event: React.ChangeEvent<{}>, value: any) => void;
  icon?: any;
};

const defaultProps: {
  id: number;
  value: number;
  text: string;
  onClick?: (event: React.ChangeEvent<{}>, value: any) => void;
  icon?: any;
} = {
  id: 0,
  value: 0,
  text: "no value",
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
        <div className={classes.linkContent}>
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
          >
            <Typography>{props.text}</Typography>
          </ListItemText>
        </div>
      </ListItem>
    </>
  );
}

SidebarLink.defaultProps = defaultProps;
