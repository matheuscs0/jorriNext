"use client";
import { ProductType } from "@/types/ProductsType";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Loading } from "@/components/Loading";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import Link from "next/link";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";

export default function ProductPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const { slug } = useParams();

  async function getProducts() {
    try {
      const res = await fetch(`https://mongodb-jorri-next-production.up.railway.app/api/categoria/${slug}`);
      if (!res.ok) {
        throw new Error("Erro");
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mt-10 flex flex-col w-full h-full items-center">
      <h1 className="text-2xl font-bold uppercase">{slug}:</h1>
      <section className="flex flex-wrap justify-center items-center gap-5 p-10">
      {products.length > 0 ? (
        products.map((product: ProductType) => (
          <div
            className="flex flex-col w-[308px] h-[430px] bg-zinc-100 justify-around items-center p-4 rounded-2xl cursor-pointer hover:shadow-md transition-shadow"
            key={product.id}
          >
            <Link href={`/products/${product.id}`} className="w-full h-full">
              <div className="flex w-full h-[250px] justify-center items-center mb-8">
                <img
                  src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.poster_path}`}
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
