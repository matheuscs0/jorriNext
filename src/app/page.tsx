"use client"
import { GetProducts } from '@/hooks/ApiProducts';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';
import { ProductCard } from '@/components/ProductCard';
import { DivAboutOne } from '@/components/DivAboutOne';

export default function Home() {
  
  const {products} = GetProducts()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);

  return (
    <div className="w-full h-full items-center justify-center mt-10">
          <nav className="w-full flex"><DivAboutOne/></nav>
        <section className='flex flex-wrap justify-center items-center gap-5 p-10'>
        {loading ? (
          <div className='w-full h-screen justify-center flex '><Loading size={50}/></div>
        ): (
          <ProductCard/>
        )} 
       </section>
    </div>
  );
}
