import { ProductType } from "@/types/ProductsType";
import { useEffect, useState } from "react";

export const GetProducts = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    async function getProducts() {
        try {
          const res = await fetch('http://localhost:3002/api/produtos');
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

      return{
        products
      }
}