import React from "react";
import Drawer from "@material-ui/core/Drawer";
import style from "./basicSidebar.css";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(style);

type SidebarLink = { url: string };

export const defaultProps: {
  username: string;
  open: boolean;
  linkList: SidebarLink[];
  variant: "permanent" | "temporary";
  anchor: "left" | "right" | "top" | "bottom";
} = {
  username: "",
  open: true,
  linkList: [],
  variant: "permanent",
  anchor: "left",
};

export type Props = typeof defaultProps;

export default function BasicSidebar(props: Props = defaultProps) {
  const classes = useStyles();

  return (
    <Drawer
      variant={props.variant}
      anchor={props.anchor}
      open={props.open}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <div className={classes.username}>{props.username}</div>

      <div className={classes.linkList}>
        {props.linkList.map((link) => {
          return <div className={classes.link}>{link.url}</div>;
        })}
      </div>
    </Drawer>
  );
}
