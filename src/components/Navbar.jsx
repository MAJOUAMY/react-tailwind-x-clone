import React from "react";
import logo from "../assets/x.svg";
import { NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { GrNotification } from "react-icons/gr";
import { FiMessageSquare } from "react-icons/fi";
import { RiGroupLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { CgMoreO } from "react-icons/cg";
function Navbar() {
  return (
    <div className=" w-[20%] border-r flex flex-col border-lightGray sticky top-0 right-0 h-[100vh]">
      <div className="w-[50px] h-[50px] hover:bg-lightGray rounded-full grid place-items-center ">
        <img src={logo} className="w-4/6 " alt="" />
      </div>

      <nav className="nav flex flex-col items-start   mt-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold  "
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 "
          }
        >
          {({ isActive }) => console.log(isActive)}

          <GoHome className="w-[26px] h-[26px]" />
          <span className="  text-xl">Home </span>
        </NavLink>
        <NavLink
          to="/explore"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold "
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 "
          }
        >
          <FiSearch className="w-[26px] h-[26px]" />
          <span className="  text-xl ">Explore </span>
        </NavLink>
        <NavLink
          to="/notifications"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold "
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 "
          }
        >
          <GrNotification className="w-[26px] h-[26px]" />
          <span className="  text-xl ">Notifications </span>
        </NavLink>
        <NavLink
          to="/messages"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold "
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 "
          }
        >
          <FiMessageSquare className="w-[26px] h-[26px]" />
          <span className="  text-xl ">Message </span>
        </NavLink>
        <NavLink
          to="/communities"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold "
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 "
          }
        >
          <RiGroupLine className="w-[26px] h-[26px]" />
          <span className="  text-xl ">Communities </span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold "
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 "
          }
        >
          <FaRegUser className="w-[26px] h-[26px]" />
          <span className="  text-xl ">Profile </span>
        </NavLink>
        <NavLink
          to="/more"
          className={({ isActive }) =>
            isActive
              ? "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 font-bold "
              : "flex items-center  p-3 rounded-[25px]  hover:bg-lightGray  gap-3 "
          }
        >
          <CgMoreO className="w-[26px] h-[26px]" />
          <span className="  text-xl ">More </span>
        </NavLink>
      </nav>
      <div className="justify-self-end flex-1 gap-4 flex flex-col justify-end py-4 ">
        <button className="bg-primary text-[#fff] w-10/12 py-3 px-6 rounded-full font-bold">
          Post
        </button>
        <div className=" p-2 hover:bg-lightGray rounded-full  w-11/12 flex items-center justify-between">
        <div className="flex items-center gap-3">
        <img
            src="http://tiny.cc/whcizz"
            className="w-12 h-12 rounded-full object-cover"
            alt=""
          />
          <div className="flex flex-col">
            <span className="font-bold">mdevc</span>
            <span>@mdevc</span>
          </div>
        </div>
          
          <span className="">
            <FiMoreHorizontal />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
