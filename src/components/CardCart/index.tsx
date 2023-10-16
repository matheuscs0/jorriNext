import { useState, useEffect } from "react";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  price: number;
};

export const CardCart = () => {
  const [products, setProducts] = useState<Product[]>([]);

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
    <div className="w-full flex flex-col justify-center items-center gap-2">
      {products.map((product) => (
        <div
          className="w-full h-[100px] flex justify-center items-center gap-5"
          key={product.id}
        >
          <div className="w-[50%] h-full flex justify-center items-center">
            <img
              src="/logoJorri.png"
              alt=""
              className="w-[100px] h-[100px] object-contain"
            />
          </div>
          <div className="w-[50%] h-full flex flex-col justify-center items-center">
            <h5>{product.name}</h5>
            <p>
              {new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(product.price)}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
