import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { HomeIcon } from "@heroicons/react/solid";

const Sidebar = () => {
  return (
    <main>
      {" "}
      <div>
        <Image
          width="50"
          height="50"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
        ></Image>
      </div>
      <div className="">
        <SidebarMenuItem text="Home" Icon={HomeIcon} active />
      </div>
    </main>
  );
};

export default Sidebar;
