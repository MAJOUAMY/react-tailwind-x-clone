import React from "react";
import { MdOutlineMoreHoriz } from "react-icons/md";
function TrendsItem({ e }) {
  const { type, country, category, content, direction, postCount } = e;

  return (
    <div className="flex flex-col py-2">
      <div className="flex justify-between items-center  ">
        <div className="text-[#536471] text-[13px]">
          {type == "country" ? `trending in ${country}` : category}
        </div>
        <MdOutlineMoreHoriz />
      </div>
      <div
        className={direction == "rtl" ? "text-right font-bold" : "font-bold"}
      >
        {content}
      </div>
      <div className="text-[#536471] text-[13px]">{postCount} posts</div>
    </div>
  );
}

export default TrendsItem;
