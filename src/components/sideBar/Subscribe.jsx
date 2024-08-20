import React from "react";

function Subscribe() {
  return (
    <div className="p-3 rounded-[20px] flex flex-col  gap-3 items-start border border-lightGray">
      <h3 className="text-xl font-extrabold">Subscribe to Premium</h3>
      <p className="text-[15px]">
        Subscribe to unlock new features and if eligible, receive a share of ads
        revenue.
      </p>
      <button className="rounded-full p-2 px-4 bg-[#000] text-[#fff] font-bold">
        SubScribe
      </button>
    </div>
  );
}

export default Subscribe;
