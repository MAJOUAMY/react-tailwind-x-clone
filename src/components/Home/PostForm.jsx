import React, { useState } from "react";
import { GiWorld } from "react-icons/gi";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineGif } from "react-icons/hi2";
import { RiListRadio } from "react-icons/ri";
import { BsEmojiSmile } from "react-icons/bs";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
function PostForm() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    const textarea = event.target;
    textarea.style.height = "auto"; // Reset height to auto to recalculate
    textarea.style.height = textarea.scrollHeight + "px"; // Set height to the scrollHeight
    setText(textarea.value);
  };

  return (
    <form className="p-4 flex items-start gap-2 border-b border-lightGray">
      <img
        src="http://tiny.cc/whcizz"
        className="w-10 h-10 rounded-full object-cover"
        alt=""
      />
      <div className="w-full  ">
        <div className="border-b p-2 border-lightGray">
          <textarea
            name=""
            id=""
            value={text}
            onChange={handleChange}
            className="w-full  resize-none overflow-hidden placeholder:text-xl placeholder:text-[]"
            style={{ height: "auto", minHeight: "50px" }}
            placeholder="What is happening"
          />
          <button className="flex items-center gap-2 mt-2 text-primary">
            <span>
              <GiWorld />
            </span>
            <span>Everyone can reply</span>
          </button>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="text-primary flex gap-3">
            <span className="w-6 h-6 rounded-full hover:bg-Hoverprimary flex justify-center items-center  p-1">
              <CiImageOn className="w-5 h-5 " />
            </span>
            <span className="w-6 h-6 rounded-full hover:bg-Hoverprimary flex justify-center items-center p-1">
              <HiOutlineGif className="w-5 h-5 " />
            </span>
            <span className="w-6 h-6 rounded-full hover:bg-Hoverprimary flex justify-center items-center p-1">
              <RiListRadio className="w-5 h-5 " />
            </span>
            <span className="w-6 h-6 rounded-full hover:bg-Hoverprimary flex justify-center items-center p-1">
              <BsEmojiSmile className="w-5 h-5 " />
            </span>
            <span className="w-6 h-6 rounded-full hover:bg-Hoverprimary flex justify-center items-center p-1">
              <RiCalendarScheduleLine className="w-5 h-5 " />
            </span>
            <span className="w-6 h-6 rounded-full hover:bg-Hoverprimary flex justify-center items-center p-1">
              <CiLocationOn className="w-5 h-5 " />
            </span>
          </div>
          <button className="bg-primary text-[#fff]  py-2 px-4 rounded-full font-bold">
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default PostForm;
