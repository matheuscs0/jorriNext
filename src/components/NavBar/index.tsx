'use client'
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md'
import {IoMdCart} from 'react-icons/io'
import { InputSearch } from "../InputSearch";
import { NavBarProps } from "@/types/NavBarProps";
import { CartIcon } from '../CartIcon/index';


const NavBar = ({ hasIconAccount, hasIconFav, }: NavBarProps) => {

  return (
    <nav className="w-full h-24 flex justify-around items-center bg-neutral-950 text-white top-0 ">
      <div className="">
        <Link href="/about" className="">
          <Image
            src='/quemSomosJorri.png'
            alt="Quem Somos"
            width={30}
            height={30}
            className="object-contain"
          /></Link>
      </div>
      <div className="">
        <Link href="/">
          <Image
            src="/logoJorri.png"
            alt="Logo Jorri"
            width={150}
            height={150}
            className="object-contain"
          />
        </Link>
      </div>
      <div className="flex gap-4 text-3xl">
        <InputSearch
          placeholder="Pesquise por um produto..."
          name="search"
          type="search"
          
        />
        <div><Link href='/login'>{hasIconAccount && <BsFillPersonFill />}</Link></div>
        <div><Link href='/'>{hasIconFav && <MdFavorite/>}</Link></div>
        <CartIcon/>
      </div>
    </nav>
  );
};

export {NavBar}
