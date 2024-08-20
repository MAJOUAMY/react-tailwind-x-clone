import React from "react";
import { MdVerified } from "react-icons/md";
import { IoIosMore } from "react-icons/io";
function PostHeader() {
  return (
    <div className=" flex justify-between items-center ">
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-1 font-bold">
          <h2>mdevc</h2>
          <MdVerified className="text-primary" />
        </span>
        <span className="flex items-center gap-2 text-[#536471] ">
          <span>@mdevc</span>
          <span>.</span>
          <span>1h</span>
        </span>
      </div>
      <div>
        <IoIosMore />
      </div>
    </div>
  );
}

export default PostHeader;
