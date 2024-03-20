"use client";

import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import { Menu } from "@/components/Menu";

export const MenuIcon = () => {
  const { sideOpen, toggleSideBar } = HandlesSideBar();
  return (
    <>
      <div className="flex justify-center items-center cursor-pointer">
        <button onClick={toggleSideBar}>
          <IoIosMenu size={32} className={`${sideOpen ? ("rotate-90 hidden transition-all duration-300 ") : (" ")}`}/>
          <IoIosClose size={40} className={`${sideOpen ? ("") : (" hidden transition-all duration-300")}`}/>
        </button>
      </div>
      {sideOpen && (<Menu/>)}
    </>
  );
};
