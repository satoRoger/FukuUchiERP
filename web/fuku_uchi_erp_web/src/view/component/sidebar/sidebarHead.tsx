import React from "react";

import useStyles from "./sidebar.css";

const headProps: { children?: React.ReactNode } = {};
type Props = typeof headProps;
export default function SidebarHead(props: Props = headProps) {
  return <div>SidebarHead{props.children}</div>;
}
