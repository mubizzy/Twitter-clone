import { SearchIcon } from "@heroicons/react/outline";
import React from "react";

const Widgets = () => {
  return (
    <div>
      <div className="">
        <div className="">
          <SearchIcon className="h-5" />
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
