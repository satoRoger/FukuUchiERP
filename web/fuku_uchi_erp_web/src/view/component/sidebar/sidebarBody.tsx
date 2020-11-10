import React from "react";

import useStyles from "./sidebar.css";

const defaultProps: { children?: React.ReactNode } = {};
type Props = typeof defaultProps;

export default function SidebarBody(props: Props) {
  return <div>SidebarHead{props.children}</div>;
}

SidebarBody.defaultProps = defaultProps;
