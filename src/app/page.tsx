'use client'
import { ProductCard } from "@/components/ProductCard";
import { NavBar } from "@/components/NavBar";
import { Cart } from "@/components/CartItems";
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
export default function Home() {

  const {toggleCart, cartOpen} = HandlesSideBar()

  return (
    <div className="w-full h-full items-center justify-center">
      <NavBar hasIconAccount={true} hasIconCart={true} hasIconFav={true} 
        onOpenCart={toggleCart}      
      />
      <div className="flex flex-wrap justify-center items-center gap-5 p-5">
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
        <ProductCard 
          name="Pulseira Prata ELo"
          price={150.32}
          hasBannerImage="/logoJorri.png"
        />
      </div>
      {cartOpen && (<Cart/>)}
    </div>
  )
}
