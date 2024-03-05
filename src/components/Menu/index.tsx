"use client";

import { MenuData } from "@/const/MenuListItems";
import { useSideBar } from "@/contexts/SideBarContext";
import { HandleMenuList } from "@/hooks/HandleMenuList";
import Link from "next/link";

export const Menu = () => {
  const { openCategorias, openMenu, handleCategoriasClick, handleMenuClick } =
    HandleMenuList();
  const { setSideOpen } = useSideBar();

  return (
    <div
      className={`w-80 h-screen absolute bg-white shadow-md z-50 text-black transition-all animate-fade-right animate-once animate-ease-in-out animate-normal animate-duration-500 top-[96.4px] left-0 `}
    >
      <div className="w-full flex justify-around items-center bg-gray-100">
        <button
          className={`w-1/2  h-full ${
            openCategorias ? "border-b-2 border-black " : ""
          }`}
          onClick={handleCategoriasClick}
        >
          <p className="font-bold text-sm p-5">CATEGORIAS</p>
        </button>
        <button
          className={`w-1/2 justify-center items-center h-full ${
            openMenu ? "border-b-2 border-black" : ""
          }`}
          onClick={handleMenuClick}
        >
          <p className="font-bold text-sm p-5 border-l">MENU</p>
        </button>
      </div>
      <div className="w-full flex-1 p-2">
        {openCategorias && (
          <ul className="flex-col cursor-pointer rounded-sm mb-2 duration-300 transition-all">
            {MenuData.Categorias.map((item, index) => (
              <Link key={index} href={item.href}>
                <li
                  className="hover:bg-gray-400/10 transition-colors rounded-sm mb-3 mx-3 p-2 border-b"
                  onClick={() => setSideOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="text-md origin-left font-bold"
                  >
                    {item.text}
                  </Link>
                </li>
              </Link>
            ))}
          </ul>
        )}
        {openMenu && (
          <ul className="flex-col cursor-pointer rounded-sm mb-2">
            {MenuData.MenuList.map((item, index) => (
               <Link key={index} href={item.href}>
              <li
                className="hover:bg-gray-400/10 transition-colors rounded-sm mb-3 mx-3 p-2 border-b"
                key={index}
                onClick={() => setSideOpen(false)}
              >
                <span className="text-md origin-left font-bold">
                  {item.text}
                </span>
              </li>
              </Link>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
