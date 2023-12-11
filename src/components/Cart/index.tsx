'use client'
import { HandlesSideBar } from "@/hooks/HandlesSideBar";
import { AiOutlineClose } from "react-icons/ai";
import { CardCart } from "../CardCart";
import { ButtonLink } from "../Buttons/ButtonLink";
import { useCart } from "@/contexts/CartProvider";
import { useRouter } from "next/navigation";
import { Button } from "../Buttons/DefaultButton";

export function Cart() {
  const { handleCloseCart } = HandlesSideBar();
  const {cartItems} = useCart()
  const {push} = useRouter()

  const handleSubmit = () => {
    if (cartItems.length >= 1) {
    push('/purchase')
    handleCloseCart()
  } else if (cartItems.length === 0){
    alert('Por favor selecione um item ao carrinho')
  }
}

  return (
    <div className={`w-80 h-screen absolute bg-white shadow-md text-white top-[96.4px] z-50 right-0 animate-fade-left animate-once animate-ease-in-out animate-normal animate-duration-500`}>
      <div className="w-full h-full ">
        <button className="p-4">
          <AiOutlineClose onClick={handleCloseCart} className="text-black"/>
        </button>
        <div className="w-full flex justify-center items-center">
        <h1 className="text-xl text-black">Carrinho</h1>
        </div>
        <div className="w-full overflow-y-scroll">
        <CardCart/>
        </div>
        <div className="w-full bottom-20 fixed my-10 mx-2">
          <Button bg="bg-black" colorText="text-white text-base" onClick={handleSubmit}>Ir para pagamento</Button>
        </div>
      </div>
    </div>
  );  
}
