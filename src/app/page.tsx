"use client";
import { ProductCard } from "@/components/ProductCard";
import { NavBar } from "@/components/NavBar";
import { Cart } from "@/components/CartItems";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Loading } from "@/components/Loading";
export default function Home() {
  const { toggleCart, cartOpen } = HandlesSideBar();

  const [loading, setLoading] = useState(true);

  async function getApi() {
    const response = await axios.get("http://localhost:3002/api/products");
    setLoading(false);
  }

  useEffect(() => {
    getApi();
  }, []);

  return (
    <div className="w-full h-full items-center justify-center">
      <NavBar
        hasIconAccount={true}
        hasIconCart={true}
        hasIconFav={true}
        onOpenCart={toggleCart}
      />
      <div className="flex flex-wrap justify-center items-center gap-5 p-5">
        {loading ? (
          <div className="w-full h-screen flex justify-center items-center">
            <Loading />
          </div>
        ) : (
          <ProductCard />
        )}
      </div>
      {cartOpen && <Cart />}
    </div>
  );
}
