import { useCart } from "@/contexts/CartProvider";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import { ButtonLink } from "../Buttons/ButtonLink";
import { ShippingFrete } from "../shippingFrete";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";
import { useRouter } from "next/navigation";
import { Button } from "../Buttons/DefaultButton";
import { AiOutlineLoading } from "react-icons/ai";
import toast from "react-hot-toast";
import { toastConfig } from "@/app/helper/toast/toastConfig";

export const TableTotal = () => {
    const { totalAmount, SubTotalAmount, frete } = useCart();
    const {push} = useRouter()

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (frete) {
      setLoading(false);
    }
  }, [frete]);

  const handleSubmit = () => {
    if (frete) {
      push('/purchase/payment')
    } else{
      toast.error("Escreva um CEP válido para continuar", toastConfig);
    }
  }

    return(
        <div className="w-[400px] flex flex-col bg-zinc-100 h-[450px] rounded-md shadow-md">
            <div className="w-full justify-center flex mt-5"><h1 className="text-xl font-bold">Resumo</h1></div>
            <div className="w-full flex justify-around mt-10">
                <div className="w-1/2 flex flex-col gap-3">
                    <p>Subtotal</p>
                    <p>Entrega</p>
                    <p>Total</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p>{formatPrice(SubTotalAmount)}</p>
                    <p>{loading ? (<div className="flex justify-center"><AiOutlineLoading className='animate-spin' size={34}/></div>): (<p>{formatPrice(frete)}</p>)}</p>
                    <p>{formatPrice(totalAmount)}</p>
                </div>
            </div>
            <div>
                <ShippingFrete/>
            </div>
            <div className="mx-5 my-5 gap-2">
                <div className="mb-2"><Button bg="bg-black" colorText="text-white" onClick={handleSubmit}>Finalizar compra</Button></div>
                <div><ButtonLink href='/'>Continuar compra</ButtonLink></div>
            </div>
        </div>
    )
}