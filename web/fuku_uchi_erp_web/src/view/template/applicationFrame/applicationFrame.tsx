import React from "react";
import Navbar from "../../component/navbar/navbar";
import Sidebar from "../../component/sidebar/sidebar";
import useStyles from "./applicationFrame.css";

type Link = {
  id: "string";
  text: "string";
  to: "string";
  icon: any;
  active: boolean;
};

export const applicationFrameProps: {
  username: string;
  links?: Link[];
} = {
  username: "ゲスト",
};

type Props = typeof applicationFrameProps;

export default function ApplicationFrame(props: Props) {
  const classes = useStyles();
  return (
    <>
      <div className={classes.applicationFrame}>
        <div className={classes.sidebar}>
          <Sidebar.container>
            <Sidebar.head>
              <Sidebar.userDisplay name={props.username} />
            </Sidebar.head>
            <Sidebar.list>
              {props.links &&
                props.links.map((link) => {
                  return (
                    <Sidebar.link
                      text={link.text}
                      icon={link.icon}
                      active={link.active}
                    />
                  );
                })}
            </Sidebar.list>
          </Sidebar.container>
        </div>
        <div className={classes.navbar}>
          <Navbar.container></Navbar.container>
        </div>
        <div className={classes.content}>{/*<ApplicationPage/>*/}</div>
      </div>
    </>
  );
}
ApplicationFrame.defaultProps = applicationFrameProps;
