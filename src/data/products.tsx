import { useState, useEffect } from "react";
import axios from "axios";
import { ProductCard } from "@/components/ProductCard";

export async function Products() {
  const [products, setProducts] = useState([]);

  async function getApi() {
    const response = await axios.get("http://localhost:3002/api/products");
    const data = response.data;
    setProducts(data);
    console.log(products);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="productContainer">
      
    </div>
  );
}
