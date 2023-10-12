'use client'
import { Cart } from "@/components/CartItems"
import { Login } from "@/components/Login"
import { NavBar } from "@/components/NavBar"
import { HandlesSideBar } from "@/hooks/HandlesSideBar"

export default function ProfilePage(){
    const {toggleCart, cartOpen} = HandlesSideBar()

    return(
        <div className="w-full h-screen flex-col">
            <NavBar 
            hasIconAccount={false}
            hasIconCart={true}
            hasIconFav={true}
            onOpenCart={toggleCart}
            />
            <div className="w-full flex justify-center items-center h-screen">
            <Login/>
            </div>
            {cartOpen && (<Cart/>)}
        </div>
    )
}