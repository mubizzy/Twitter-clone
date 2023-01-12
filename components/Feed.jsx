import React from "react";
import { SparklesIcon } from "@heroicons/react/outline";

const Feed = () => {
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200  xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
      <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
        <SparklesIcon className="h-5" />
      </div>
    </div>
  );
};

export default Feed;
