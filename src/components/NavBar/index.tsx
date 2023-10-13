'use client'
import Image from "next/image";
import Link from "next/link";
import { BsFillPersonFill } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md'
import {IoMdCart} from 'react-icons/io'
import { InputSearch } from "../InputSearch";


type navBarProps = {
    hasIconAccount?: boolean;
    hasIconFav?: boolean,
    hasIconCart?: boolean;
    onOpenCart:  () => void;
}
const NavBar = ({ hasIconAccount, hasIconFav, hasIconCart, onOpenCart}: navBarProps) => {

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
        <Link href='/login'>{hasIconAccount && <BsFillPersonFill />}</Link>
        <Link href='/'>{hasIconFav && <MdFavorite/>}</Link>
        <button onClick={onOpenCart}>{hasIconCart && <IoMdCart/>}</button>
      </div>
    </nav>
  );
};

export {NavBar}
