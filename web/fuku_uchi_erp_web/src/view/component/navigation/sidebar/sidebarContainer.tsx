import React from "react";
import Drawer from "@material-ui/core/Drawer";
import useStyles from "./sidebar.css";

const defaultProps: {
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

type Props = typeof defaultProps;

export default function SidebarContaniner(props: Props) {
  const classes = useStyles();
  return (
    <>
      <Drawer
        open={props.open}
        variant={props.variant}
        anchor={props.anchor}
        classes={{ paper: classes.container }}
        ModalProps={{ keepMounted: true }}
      >
        {props.children}
      </Drawer>
    </>
  );
}
SidebarContaniner.defaultProps = defaultProps;
