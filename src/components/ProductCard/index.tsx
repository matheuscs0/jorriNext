import Link from "next/link";
import { ButtonLink } from "../Buttons/ButtonLink";
import axios from "axios";
import { useEffect, useState } from "react";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { Button } from "../Buttons/DefaultButton";

type Product = {
  id: number;
  name: string;
  price: number;
};

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const {addToCart} = HandlesSideBar()

  async function getApi() {
    try {
      const response = await axios.get<Product[]>(
        "http://localhost:3002/api/products"
      );
      const data = response.data;
      setProducts(data);
    } catch (error) {
      console.error("Erro ao obter dados da API:", error);
    }
  }
  
  useEffect(() => {
    getApi();
  }, []);

  return (
    <>
      {products.map((product) => (
        <div
          className="flex flex-col w-[308px] h-[410px] bg-zinc-100 justify-around items-center p-5 rounded-2xl cursor-pointer hover:shadow-md transition-all"
          key={product.id}
        >
          <Link href="/">
            <div className="flex w-full h-[250px] justify-center items-center">
              <img
                src="logoJorri.png"
                alt={product.name}
                className="flex w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-2 w-full">
              <h3 className="text-center text-lg font-medium">
                {product.name}
              </h3>
              <p>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </p>
            </div>
            <div className="w-full flex justify-center items-center my-4">
            <Button
            bg="bg-neutral-950"
            colorText="text-white"
            onAddToCart={addToCart}
            >Comprar</Button>
            </div>
          </Link>
        </div>
      ))}
    </>
  );
};

export { ProductCard };
