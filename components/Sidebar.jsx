import Image from "next/image";
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";

const Sidebar = () => {
  return (
    <main>
      {" "}
      <div>
        Sidebar
        <Image
          width="50"
          height="50"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/800px-Twitter-logo.svg.png"
        ></Image>
      </div>
      <div className="">
        <SidebarMenuItem />
      </div>
    </main>
  );
};

export default Sidebar;
