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
import { useSession, signIn, signOut } from "next-auth/react";
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
            alt=""
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
        {session ? (
          <>
            {" "}
            <button
              onClick={signIn}
              className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline"
            >
              Tweet
            </button>
            {/* Mini-Profile */}
            <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start mt-auto">
              <img
                onClick={signOut}
                src={session.user.image}
                alt="user-img"
                className="h-10 w-10 rounded-full xl:mr-2"
              />
              <div className="leading-5 hidden xl:inline">
                <h4 className="font-bold">{session.user.name}</h4>
                <p className="text-gray-500">{session.user.username}</p>
              </div>
              <DotsHorizontalIcon className="h-5 xl:ml-8 hidden xl:inline" />
            </div>
          </>
        ) : (
          <button
            onClick={signIn}
            className="hoverEffect  flex items-center justify-center xl:justify-start mt-aut bg-blue-400 text-white rounded-full hover:bg-blue-500"
          >
            sigin in
          </button>
        )}
      </div>
    </main>
  );
};

export default Sidebar;
