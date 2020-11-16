import { AppBar, Tab, Tabs } from "@material-ui/core";
import React, { useState } from "react";
import SidebarComponent from "../../component/sidebar/sidebarComponent";
import { LinkParameter } from "../../component/sidebar/sidebarLink";

const defaultProps: {
  open: boolean;
  links: LinkParameter[];
  variant: "permanent" | "temporary";
  username: string;
} = { open: true, links: [], variant: "permanent", username: "ゲスト" };

type Props = typeof defaultProps;

export default function Sidebar(props: Props) {
  const [value, setValue] = useState(0);

  const handleLinkClick = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <SidebarComponent.container open={props.open} variant={props.variant}>
        <SidebarComponent.head>
          <SidebarComponent.userDisplay name={props.username} />
        </SidebarComponent.head>
        <SidebarComponent.list value={value}>
          {props.links.map((link: LinkParameter) => {
            return (
              <SidebarComponent.link
                id={link.id}
                value={value}
                text={link.text}
                icon={link.icon}
                onClick={handleLinkClick}
              />
            );
          })}
        </SidebarComponent.list>
      </SidebarComponent.container>
    </>
  );
}
Sidebar.defaultProps = defaultProps;
