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
import { useSession } from "next-auth/react";
const Sidebar = () => {
  const { data: session } = useSession();
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
          {session && (
            <>
              {" "}
              <SidebarMenuItem text="Notifications" Icon={BellIcon} />
              <SidebarMenuItem text="Messages" Icon={InboxIcon} />
              <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon} />
              <SidebarMenuItem text="Lists" Icon={ClipboardIcon} />
              <SidebarMenuItem text="Profile" Icon={UserIcon} />
              <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon} />
            </>
          )}
        </div>
        {/* Button */}
        <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">
          Tweet
        </button>
        {/* Mini-Profile */}
        <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
          <img
            src="https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Z3V5fGVufDB8fDB8fA%3D%3D&w=1000&q=80"
            alt="user-img"
            className="h-10 w-10 rounded-full xl:mr-2"
          />
          <div className="leading-5 hidden xl:inline">
            <h4 className="font-bold"></h4>
            <p className="text-gray-500"></p>
          </div>
          <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
        </div>
      </div>
    </main>
  );
};

export default Sidebar;
