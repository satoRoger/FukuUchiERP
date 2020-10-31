import React from "react";

import Drawer from "@material-ui/core/Drawer";

type SidebarLink = { url: string };

const SidebarDrawer: React.FC<{
  open?: boolean;
  variant?: "permanent" | "temporary";
  username: string;
  linkList: SidebarLink[];
}> = ({ open = true, variant = "permanent", username, linkList }) => {
  return (
    <Drawer
      variant={variant}
      anchor="left"
      open={open}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {username}
      {linkList.map(())}

<div>{linkList}</div>
      }}
    </Drawer>
  );
};

function BasicSidebarOnMU() {
  const links = [{ url: "test" }, { url: "test2" }];

  return <SidebarDrawer username="test" linkList={links} />;
}

export default BasicSidebarOnMU;
