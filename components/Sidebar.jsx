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
      <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
        {" "}
        {/* Twitter Logo */}
        <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
          <Image
            width="50"
            height="50"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
          ></Image>
        </div>
        {/* Menu */}
        <div className="mt-4 mb-2.5 xl:items-start">
          <SidebarMenuItem text="Home" Icon={HomeIcon} />
          <SidebarMenuItem text="Explore" Icon={HashtagIcon} />
          <SidebarMenuItem text="Notifications" Icon={BellIcon} />
          <SidebarMenuItem text="Messages" Icon={InboxIcon} />
          <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
          <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
          <SidebarMenuItem text="Profile" Icon={UserIcon} />
          <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
        </div>
        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
          Tweet
        </button>
        {/* Mini-Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto"></div>
      </div>
    </main>
  );
};

export default Sidebar;
