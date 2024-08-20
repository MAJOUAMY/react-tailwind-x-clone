import React from "react";
import { FaRegComment } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { CiBookmark } from "react-icons/ci";
import { MdIosShare } from "react-icons/md";

function PostFooter() {
  return (
    <div className="flex items-center justify-between">
      <div className="text-[#536471] flex items-center gap-1 hover:text-Hoverprimary text-sm">
        <span>
          <FaRegComment className="w-5 h-5" />
        </span>
        <span></span>
      </div>
      <div className="text-[#536471] flex items-center gap-1 text-sm">
        <span>
          <BiRepost className="w-5 h-5" />
        </span>
        <span>18</span>
      </div>
      <div className="text-[#536471] flex items-center gap-1 text-sm">
        <span>
          <FaRegHeart className="w-5 h-5" />
        </span>
        <span>29</span>
      </div>
      <div className="text-[#536471] flex items-center gap-1 text-sm">
        <span>
          <IoIosStats className="w-5 h-5" />
        </span>
        <span>100k</span>
      </div>
      <div className="text-[#536471] flex items-center gap-3 text-sm">
        <span>
          <CiBookmark className="w-5 h-5" />
        </span>
        <span>
          <MdIosShare className="w-5 h-5" />
        </span>
      </div>
    </div>
  );
}

export default PostFooter;
