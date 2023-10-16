"use client";
import { useCart } from "@/contexts/CartProvider";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { AiOutlineClose } from "react-icons/ai";
import { CardCart } from "../CardCart";

export function Cart() {
  const { handleCloseCart } = HandlesSideBar();

  return (
    <div className="w-[300px] h-screen bg-neutral-950 shadow-2xl text-white top-24 absolute z-50 right-0 animate-[sideBar_0.2s_ease-in-out] overflow-scroll">
      <div className="w-full h-full ">
        <button className="p-4">
          <AiOutlineClose onClick={handleCloseCart} />
        </button>
        <div className="w-full flex justify-center items-center">
        <h1 className="text-xl ">Carrinho</h1>
        </div>
        <div className="w-full h-full">
        <CardCart/>
        </div>
      </div>
    </div>
  );  
}
