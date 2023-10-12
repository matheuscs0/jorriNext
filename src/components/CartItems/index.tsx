"use client";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { AiOutlineClose } from "react-icons/ai";

export function Cart() {
  const { handleCloseCart } = HandlesSideBar();

  return (
    <div className="w-[300px] h-full bg-neutral-950 shadow-2xl text-white top-24 absolute z-50 right-0 animate-[sideBar_0.2s_ease-in-out]">
      <div className="w-full h-full bg-red">
        <button className="p-4">
          <AiOutlineClose onClick={handleCloseCart} />
        </button>
        <ul>oi</ul>
      </div>
    </div>
  );  
}
