import { HandlesSideBar } from "@/hooks/HandlesSideBar";

import { Cart } from "../Cart";
import { IoCartOutline } from "react-icons/io5";

export function CartIcon() {
  const { toggleCart, cartOpen } = HandlesSideBar();

  return (
    <>
    <div className="flex items-center relative cursor-pointer">
      <IoCartOutline onClick={toggleCart} size={33}/>
      <span className="bg-neutral-300 text-sm font-bold rounded-full w-5 h-5 absolute left-4 bottom-5 flex justify-center hidden">
        5
      </span>
    </div>
    {cartOpen && (<Cart/>)}
    </>
  );
}
