'use client'
import { ProductCard } from "@/components/ProductCard";
import  GridContainer  from "@/templates/GridContainer";
import { NavBar } from "@/components/NavBar";
import Cart from "@/components/CartItems";
import { HandlesSideBar } from "@/hooks/SideBar";

export default function Home() {

  const {toggleCart, cartOpen} = HandlesSideBar()

  return (
    <div className="w-full h-full items-center justify-center overflow-hidden">
      <NavBar hasIconAccount={true} hasIconCart={true} hasIconFav={true} 
        onOpenCart={toggleCart}      
      />
      <GridContainer>
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
      </GridContainer>
      {cartOpen && (<Cart/>)}
    </div>
  )
}
