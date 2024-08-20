import React from "react";
import SearchForm from "./sideBar/SearchForm";
import Subscribe from "./sideBar/Subscribe";
import Trends from "./sideBar/Trends";
import WhoToFollow from "./sideBar/WhoToFollow";

function SideBar() {
  return (
    <div className="w-[30%] flex flex-col gap-5 pl-6 border-l border-lightGray pb-20">
      <SearchForm />
      <Subscribe />
      <Trends />
      <WhoToFollow />
    </div>
  );
}

export default SideBar;
