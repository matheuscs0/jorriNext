'use client'
import { Cart } from "@/components/Cart"
import { Login } from "@/components/Login"
import { HandlesSideBar } from "@/hooks/HandlesSideBar"

export default function ProfilePage(){
    const {toggleCart, cartOpen} = HandlesSideBar()

    return(
        <div className="w-full h-screen flex-col">
            <div className="w-full flex justify-center h-full mt-10">
            <Login/>
            </div>
            {cartOpen && (<Cart/>)}
        </div>
    )
}