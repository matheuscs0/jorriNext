'use client'
import Link from "next/link";
import { IoPersonOutline } from "react-icons/io5";
import { InputSearch } from "../InputSearch";
import { NavBarProps } from "@/types/NavBarProps";
import { CartIcon } from '../CartIcon/index';
import { Cardo } from "next/font/google";
import { MenuIcon } from "../Menu/MenuIcon";
import { InputSearchIcon } from "../InputSearch/InputSearchIcon";

const cardo = Cardo({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const NavBar = ({ hasIconAccount }: NavBarProps) => {

  return (
    <nav className="w-full h-24 flex justify-around items-center bg-white text-black top-0 shadow-md fixed z-30">
      <div className="flex gap-2">
        <MenuIcon/>
        <div className="flex sm:hidden"><InputSearchIcon/></div>
      </div>
      <div className={cardo.className}>
        <Link href="/">
          <h1 className="text-5xl font-bold">JORRI</h1>
        </Link>
      </div>
      <div className="flex gap-4 text-3xl justify-center items-center">
      <div className="hidden sm:flex"><InputSearchIcon/></div>
        <div><Link href='/login'>{hasIconAccount && <IoPersonOutline />}</Link></div>
        <CartIcon/>
      </div>
    </nav>
  );
};

export {NavBar}
