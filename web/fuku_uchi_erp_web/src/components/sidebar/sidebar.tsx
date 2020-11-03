import React from "react";
import Drawer from "@material-ui/core/Drawer";
import style from "./sidebar.css";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Card from "@material-ui/core/Card";

const useStyles = makeStyles(style);

const headProps: { children?: React.ReactNode } = {};
type headProps = typeof headProps;
function SidebarHead(props: headProps = headProps) {
  return <div>SidebarHead{props.children}</div>;
}

const usernameProps: { children?: React.ReactNode } = {};
type usernameProps = typeof usernameProps;
function SidebarUsername(props: usernameProps = usernameProps) {
  return <div>SidebarUsername{props.children}</div>;
}

const bodyProps: { children?: React.ReactNode } = {};
type bodyProps = typeof bodyProps;
function SidebarBody(props: bodyProps = bodyProps) {
  return <div>SidebarBody{props.children}</div>;
}
export const containerProps: {
  open: boolean;
  variant: "permanent" | "temporary";
  anchor: "left" | "right" | "top" | "bottom";
  children?: React.ReactNode;
  onClose?: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
} = {
  open: true,
  variant: "permanent",
  anchor: "left",
};
type containerProps = typeof containerProps;
function SidebarContaniner(props: containerProps = containerProps) {
  const classes = useStyles();

  return (
    <>
      <Drawer
      open={props.open}
      >
        {props.children}
        <div className={classes.background} />
      </Drawer>
    </>
  );
}

const Sidebar = {
  container: SidebarContaniner,
  head: SidebarHead,
  username: SidebarUsername,
  body: SidebarBody,
};
export default Sidebar;
