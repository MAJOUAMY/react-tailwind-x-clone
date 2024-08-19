import React from "react";

function HomeNav() {
  return (
    <div className="flex  border-b border-lightGray">
      <div className="w-6/12 p-3 text-center hover:bg-lightGray font-bold">
        For you
      </div>

      <div className="w-6/12 p-3 text-center hover:bg-lightGray font-bold ">
        following
      </div>
    </div>
  );
}

export default HomeNav;
