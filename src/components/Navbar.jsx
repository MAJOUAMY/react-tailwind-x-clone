import React from "react";
import logo from "../assets/x.svg";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
function Navbar() {
  return (
    <div className=" w-3/12 border-r border-lightGray sticky h-[100vh]">
      <div className="w-[50px] h-[50px] hover:bg-lightGray rounded-full grid place-items-center ">
        <img src={logo} className="w-4/6 " alt="" />
      </div>

      <nav className="nav flex flex-col items-start  mt-4">
        <NavLink
          to="/"
          className={({ isActive }) => 
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold"
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3"
          }
        >
          <GoHome className="w-[26px] h-[26px]" />
          <span className="font-Segoe  text-xl">Home </span>
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold"
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3"
          }
        >
          <GoHome className="w-[26px] h-[26px]" />
          <span className="font-Segoe  text-xl">Home </span>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
