import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";
import {
  BellIcon,
  BookmarkIcon,
  ClipboardIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  HashtagIcon,
  InboxIcon,
  UserIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <main>
      {" "}
      <div>
        {/* Twitter Logo */}
        <Image
          width="50"
          height="50"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
        ></Image>
      </div>
      {/* Menu */}
      <div className="">
        <SidebarMenuItem text="Home" Icon={HomeIcon} />
        <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
        <SidebarMenuItem text="Notifications" Icon={BellIcon} />
        <SidebarMenuItem text="Messages" Icon={InboxIcon} />
        <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
        <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
        <SidebarMenuItem text="Profile" Icon={UserIcon} />
        <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
      </div>
    </main>
  );
};

export default Sidebar;
