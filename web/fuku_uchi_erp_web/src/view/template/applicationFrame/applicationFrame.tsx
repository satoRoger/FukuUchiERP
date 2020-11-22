import React from "react";
import ApplicationPageContainer from "../../component/applicationPageContainer/applicationPageContainer";
import Navbar from "../../component/navbar/navbar";
import useStyles from "./applicationFrame.css";
import { LinkParameter } from "../../component/sidebar/sidebarLink";
import Sidebar from "../../component/sidebar/sidebar";
export const applicationFrameProps: {
  username: string;
  sidebarState: "permanent" | "open" | "close";
  links: LinkParameter[];
  children?: React.ReactNode;
} = {
  username: "ゲスト",
  sidebarState: "permanent",
  links: [],
};

type Props = typeof applicationFrameProps;

export default function ApplicationFrame(props: Props) {
  const classes = useStyles();
  const ispermanent = props.sidebarState === "permanent";
  const isOpen = props.sidebarState === "open";

  return (
    <>
      <div className={classes.background}></div>{" "}
      <Sidebar
        links={props.links}
        username={props.username}
        open={isOpen}
        variant={ispermanent ? "permanent" : "temporary"}
      />
      <Navbar.container sidebarOpen={ispermanent}></Navbar.container>
      <ApplicationPageContainer sidebarOpen={ispermanent}>
        {props.children}
      </ApplicationPageContainer>
    </>
  );
}
ApplicationFrame.defaultProps = applicationFrameProps;
