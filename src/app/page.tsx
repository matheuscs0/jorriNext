"use client"
import { GetProducts } from '@/hooks/ApiProducts';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';
import { ProductCard } from '@/components/ProductCard';
import { DivAboutOne } from '@/components/DivAboutOne';
import { ImgHome } from '@/components/ImgHome';

export default function Home() {
  
  const {products} = GetProducts()
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (products) {
      setLoading(false);
    }
  }, [products]);


  return (
    <section className="w-full h-full items-center justify-center mt-10">
          <nav className="w-full flex mt-5"><DivAboutOne/></nav>
          <div className='w-full flex justify-center items-center gap-2 mt-5'>
            <div className='w-full flex-col justify-center items-center sm:flex md:flex-row gap-2'>
                <div className='flex gap-2'> 
                  <ImgHome href="conjuntos" src='/imgHome1.png'/>
                  <ImgHome href="colares" src='/imgHome2.png'/>
                </div>
                <div className='flex justify-center mt-2'>
                  <ImgHome href="pulseiras" src='/imgHome3.png'/>
                </div>
            </div>
          </div>
        <section className='flex flex-wrap justify-center items-center gap-5 p-10'>
        {loading ? (
          <div className='w-full h-screen justify-center flex '><Loading/></div>
        ): (
          <ProductCard/>
        )} 
       </section>
    </section>
  );
}
