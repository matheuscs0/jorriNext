import Link from "next/link";
import { ButtonLink } from "../Buttons/ButtonLink";
import { useEffect, useState } from "react";
import { ProductType } from "@/types/ProductsType";
import { formatPrice } from "@/functions/formatPrice";
import { Button } from "../Buttons/DefaultButton";
import { useCart } from "@/contexts/CartProvider";

const ProductCard = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const {addProduct} = useCart()

  async function getProducts() {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
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
    <>
      {products.map((product: ProductType) => (
        <div
          className="flex flex-col w-[308px] h-[410px] bg-zinc-100 justify-around items-center p-4 gap-3 rounded-2xl cursor-pointer hover:shadow-md transition-all"
          key={product.id}
        >
          <Link href="/" className="w-full h-full">
            <div className="flex w-full h-[250px] justify-center items-center">
              <img
                src={product.image}
                alt={product.title}
                className="flex w-full h-full object-contain relative"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <h3 className="text-center text-sm font-medium h-full">
                {product.title}
              </h3>
              <p className="text-center text-md ">
                {formatPrice(product.price)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center my-4">
              <Button bg="bg-black"
                colorText="text-white"
                onClick={() => addProduct(product)}
              >Ver detalhes</Button>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export { ProductCard };


