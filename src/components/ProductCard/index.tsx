import Link from "next/link";
import { ButtonLink } from "../Buttons/ButtonLink";
import axios from "axios";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";

type ProductCardProps = {
  name: string;
  price: number;
  hasBannerImage: string;
};

const ProductCard = ({ name, price, hasBannerImage }: ProductCardProps) => {

  return (
    <Link href="/">
        <div className="flex flex-col w-[308px] h-[410px] bg-zinc-100 justify-around items-center p-5 rounded-2xl shadow-md cursor-pointer">
          <div className="flex w-full h-[250px] justify-center items-center">
            <img
              src={hasBannerImage}
              alt={name}
              className="flex w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-2 w-full">
            <h3 className="text-center text-lg font-medium">{name}</h3>
            <p>R$ {price}</p>
          </div>
          <div className="w-full flex justify-center items-center">
            <ButtonLink href="/id">Comprar</ButtonLink>
          </div>
        </div>
    </Link>
  );
};

export { ProductCard };
