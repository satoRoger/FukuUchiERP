import SidebarContaniner from "./sidebarContainer";
import SidebarLink, { LinkParameter } from "./sidebarLink";
import SidebarLinkList from "./sidebarLinkList";
import SidebarHead from "./sidebarHead";
import SidebarUserDisplay from "./sidebarUserDisplay";
import React, { useState } from "react";

const defaultProps: {
  open: boolean;
  links: LinkParameter[];
  variant?: "permanent" | "temporary";
  username?: string;
} = { open: true, links: [], variant: "permanent", username: "ゲスト" };

type Props = typeof defaultProps;

export default function Sidebar(props: Props) {
  const [value, setValue] = useState(0);

  const handleLinkClick = (_: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <SidebarContaniner open={props.open} variant={props.variant}>
        <SidebarHead>
          <SidebarUserDisplay name={props.username} />
        </SidebarHead>
        <SidebarLinkList value={value}>
          {props.links.map((link: LinkParameter) => {
            return (
              <SidebarLink
                id={link.id}
                value={value}
                text={link.text}
                icon={link.icon}
                onClick={handleLinkClick}
              />
            );
          })}
        </SidebarLinkList>
      </SidebarContaniner>
    </>
  );
}
