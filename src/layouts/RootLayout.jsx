import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div>
      <Navbar />
      {/* <div>
        <Outlet />
      </div> */}
      <SideBar />
    </div>
  );
}

export default RootLayout;
