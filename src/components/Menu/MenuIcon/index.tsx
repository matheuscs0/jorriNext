"use client";

import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { IoIosMenu } from "react-icons/io";
import { Menu } from "@/components/Menu";

export const MenuIcon = () => {
  const { sideOpen, toggleSideBar } = HandlesSideBar();
  return (
    <>
      <div className="flex justify-center items-center cursor-pointer">
        <button onClick={toggleSideBar}>
          <IoIosMenu size={32} />
        </button>
      </div>
      {sideOpen && (<Menu/>)}
    </>
  );
};
