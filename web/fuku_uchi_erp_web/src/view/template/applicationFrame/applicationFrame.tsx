import React from "react";
import ApplicationPageContainer from "../../component/applicationPageContainer/applicationPageContainer";
import Navbar from "../../component/navbar/navbar";
import Sidebar from "../../component/sidebar/sidebar";
import useStyles from "./applicationFrame.css";

type Link = {
  id: any;
  value: any;
  text: "string";
  to: "string";
  icon: any;
};

export const applicationFrameProps: {
  username: string;
  sidebarState: "permanent" | "open" | "close";
  links?: Link[];
  children?: React.ReactNode;
} = {
  username: "ゲスト",
  sidebarState: "permanent",
};

type Props = typeof applicationFrameProps;

export default function ApplicationFrame(props: Props) {
  const classes = useStyles();
  const ispermanent = props.sidebarState === "permanent";
  const isOpen = props.sidebarState === "open";
  return (
    <>
      <div className={classes.background}></div>
      <Sidebar.container
        variant={ispermanent ? "permanent" : "temporary"}
        open={isOpen}
      >
        <Sidebar.head>
          <Sidebar.userDisplay name={props.username} />
        </Sidebar.head>
        <Sidebar.list>
          {props.links &&
            props.links.map((link) => {
              return (
                <Sidebar.link
                  id={link.id}
                  value={link.value}
                  text={link.text}
                  icon={link.icon}
                />
              );
            })}
        </Sidebar.list>
      </Sidebar.container>
      <Navbar.container sidebarOpen={ispermanent || isOpen}></Navbar.container>
      <ApplicationPageContainer sidebarOpen={ispermanent || isOpen}>
        {props.children}
      </ApplicationPageContainer>
    </>
  );
}
ApplicationFrame.defaultProps = applicationFrameProps;
