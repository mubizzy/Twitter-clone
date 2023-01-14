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
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default Input;
