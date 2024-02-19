"use client";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Loading } from "@/components/Loading";
import { useSearch } from "@/contexts/SearchContext";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import { ProductType } from "@/types/ProductsType";
import Link from "next/link";

export default function SearchPage() {
  const { searchResults } = useSearch();
  return (
    <div className="mt-10 flex flex-col w-full h-full items-center">
      <section className="flex flex-wrap justify-center items-center gap-5 p-10">
        {searchResults.length > 1 ? (
          searchResults.map((product: ProductType) => (
            <div
              className="flex flex-col w-[308px] h-[430px] bg-zinc-100 justify-around items-center p-4 rounded-2xl cursor-pointer hover:shadow-md transition-shadow"
              key={product.id}
            >
              <Link href={`/products/${product.id}`} className="w-full h-full">
                <div className="flex w-full h-[250px] justify-center items-center mb-8">
                  <img
                    src={`https://mongodb-jorri-next-production.up.railway.app/api/produtos/${product.poster_path}`}
                    alt={product.name}
                    className="flex w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center gap-1 w-full h-[50px]">
                  <h3 className="text-center text-sm flex justify-center">
                    {product.name}
                  </h3>
                  <p className="text-center text-md flex justify-center ">
                    {formatPrice(product.price)}
                  </p>
                </div>
                <div className="w-full flex justify-center items-center my-4">
                  <ButtonLink href={`/products/${product.id}`}>
                    Ver detalhes
                  </ButtonLink>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <div className="mt-10">
            <Loading size={32}/>
          </div>
        )}
      </section>
    </div>
  );
}
