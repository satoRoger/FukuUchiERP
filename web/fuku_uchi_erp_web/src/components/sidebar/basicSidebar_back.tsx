import React from "react";
import Drawer from "@material-ui/core/Drawer";
import style from "./sidebar.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import List from "@material-ui/core/List";
import Link from "next/link";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(style);

type SidebarLink = { url: string };
const linkListProps: {
  linkList: SidebarLink[];
} = { linkList: [] };

type linkListProps = typeof linkListProps;

function LinkList(props: linkListProps) {
  const classes = useStyles();
  return (
    <>
      <List className={classes.linkList}>
        {props.linkList.map((link) => {
          return <Link href={link.url}>{link.url}</Link>;
        })}
      </List>
    </>
  );
}

export const sidebarHeadProps: {}={};
type sidebarHeadProps = typeof sidebarHeadProps;

function SidebarHead(props: sidebarHeadProps = sidebarHeadProps) {}

function SidebarBody(props: sidebarBodyProps = sidebarHeadProps) {}

export const sidebarProps: {
  username: string;
  open: boolean;
  linkList: SidebarLink[];
  variant: "permanent" | "temporary";
  anchor: "left" | "right" | "top" | "bottom";
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
} = {
  username: "",
  open: false,
  linkList: [],
  variant: "permanent",
  anchor: "left",
};

export type sidebarProps = typeof sidebarProps;

function SidebarContaniner(props: sidebarProps = sidebarProps) {
  const classes = useStyles();

  return (
    <>
      <Drawer
        variant={props.variant}
        anchor={props.anchor}
        open={props.open}
        ModalProps={{
          keepMounted: true,
        }}
        classes={{ paper: classes.drawerPaper }}
        onClose={props.onClose}
      >
        <button
          onClick={() => {
            alert("tets");
          }}
        >
          etst
        </button>
        <div className={classes.username}>{props.username}</div>

        <div className={classes.linkListBox}>
          <LinkList linkList={props.linkList} />
        </div>
        <div className={classes.background} />
      </Drawer>
    </>
  );
}

const Sidebar = {
  container: SidebarContaniner,
  head: SidebarHead,
  body: SidebarBody,
};
export default Sidebar;
