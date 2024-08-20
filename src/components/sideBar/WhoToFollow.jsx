import React from "react";
import { Link } from "react-router-dom";

function WhoToFollow() {
  return (
    <div className="p-3 rounded-[20px] flex flex-col  gap-3  border border-lightGray">
      <div className="flex justify-between">
        <div className=" flex items-center gap-3">
          <img
            className="rounded-full object-cover w-12 h-12"
            src="https://tinyurl.com/r3vampy7"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">github</span>
            <span className="text-[#64737F]">@github</span>
          </div>
        </div>
        <button className="rounded-full px-8 bg-[#000] text-[#fff] font-bold">
          follow
        </button>
      </div>
      <div className="flex justify-between">
        <div className=" flex items-center gap-3">
          <img
            className="rounded-full object-cover w-12 h-12"
            src="http://tiny.cc/whcizz"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">mdevc</span>
            <span className="text-[#64737F]">@mdevc</span>
          </div>
        </div>
        <button className="rounded-full px-8 bg-[#000] text-[#fff] font-bold">
          follow
        </button>
      </div>
      <div className="flex justify-between">
        <div className=" flex items-center gap-3">
          <img
            className="rounded-full object-cover w-12 h-12"
            src="https://tinyurl.com/3556ru3w"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">Almoshaf</span>
            <span className="text-[#64737F]">@Almoshaf</span>
          </div>
        </div>
        <button className="rounded-full px-8 bg-[#000] text-[#fff] font-bold">
          follow
        </button>
      </div>
      <Link>
        <span className="text-[#1d9bf0]">Show More </span>
      </Link>
    </div>
  );
}

export default WhoToFollow;
