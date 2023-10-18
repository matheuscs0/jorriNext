import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { IoMdCart } from "react-icons/io";
import { Cart } from "../CartItems";

export function CartIcon() {
  const { toggleCart, cartOpen } = HandlesSideBar();

  return (
    <>
    <div className="flex items-center relative">
      <IoMdCart onClick={toggleCart} />
      <span className="bg-neutral-600 text-sm font-bold rounded-full w-5 h-5 absolute left-4 bottom-5">
        5
      </span>
    </div>
    {cartOpen && <Cart/>}
    </>
  );
}
