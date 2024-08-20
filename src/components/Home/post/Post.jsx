import React from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import PostFooter from "./PostFooter";
import PostAttachment from "./PostAttachment";

function Post() {
  return (
    <div className="flex">
      <img
        src="http://tiny.cc/whcizz"
        className="rounded-full object-cover w-[40px] h-[40px]"
        alt=""
      />
      <div className="w-full flex flex-col gap-2 px-3">
        <PostHeader />
        <PostContent />
        <PostAttachment />
        <PostFooter />
      </div>
    </div>
  );
}

export default Post;
