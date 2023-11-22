"use client";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { AiOutlineClose } from "react-icons/ai";
import { CardCart } from "../CardCart";

export function Cart() {
  const { handleCloseCart } = HandlesSideBar();

  return (
    <div className={`w-80 h-screen absolute bg-white shadow-md text-white top-[96.5px] z-50 right-0 overflow-y-scroll animate-fade-left animate-once animate-ease-in-out animate-normal animate-duration-500`}>
      <div className="w-full h-full ">
        <button className="p-4">
          <AiOutlineClose onClick={handleCloseCart} className="text-black"/>
        </button>
        <div className="w-full flex justify-center items-center">
        <h1 className="text-xl text-black">Carrinho</h1>
        </div>
        <div className="w-full h-full">
        <CardCart/>
        </div>
      </div>
    </div>
  );  
}
