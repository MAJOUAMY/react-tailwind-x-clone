import React from "react";
import Navbar from "../components/Navbar";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="flex align-top justify-between">
      <Navbar />
      <div className="w-6/12">
        <Outlet />
      </div>
      <SideBar />
    </div>
  );
}

export default RootLayout;
