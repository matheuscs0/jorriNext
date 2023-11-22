"use client"
import { ProductCard } from "@/components/ProductCard";
import { useState, useEffect } from 'react'
import {Loading} from '@/components/Loading/index'
import { GetProducts } from "@/hooks/ApiProducts";


export default function Home() {
  const {products} = GetProducts()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div className="w-full h-full items-center justify-center">
      <section className="flex flex-wrap justify-center items-center gap-5 p-10">
          {loading ? (<div className="w-full h-screen flex justify-center items-center"> <Loading/> </div>) : (
          <ProductCard />)}
      </section>
    </div>
  );
}
