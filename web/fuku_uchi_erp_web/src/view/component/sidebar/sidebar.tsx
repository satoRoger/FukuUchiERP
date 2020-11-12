import SidebarContaniner from "./sidebarContainer";
import SidebarLink from "./sidebarLink";
import SidebarLinkList from "./sidebarLinkList";
import SidebarHead from './sidebarHead';
import SidebarUserDisplay from './sidebarUserDisplay';

const Sidebar = {
  head:SidebarHead,
  userDisplay:SidebarUserDisplay,
  container: SidebarContaniner,
  link: SidebarLink,
  list: SidebarLinkList,
};
export default Sidebar;
