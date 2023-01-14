import { EmojiHappyIcon, PhotographIcon } from "@heroicons/react/outline";
import React from "react";

const Input = () => {
  return (
    <div>
      <img src="/public/pic.jpeg" alt="pics" />
      <div className="w-full divide-y divide-gray-200">
        <div className="">
          <textarea
            className="w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700"
            rows="2"
            placeholder="What's happening?"
            value=""
          ></textarea>
        </div>
        <div className="">
          <div className="">
            <PhotographIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
            <EmojiHappyIcon className="h-10 w-10 hoverEffect p-2 text-sky-500 hover:bg-sky-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
