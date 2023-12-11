import { useCart } from "@/contexts/CartProvider";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import { ButtonLink } from "../Buttons/ButtonLink";
import { ShippingFrete } from "../shippingFrete";
import { useEffect, useState } from "react";
import { Loading } from "../Loading";

export const TableTotal = () => {
    const { totalAmount, SubTotalAmount, frete } = useCart();

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (frete) {
      setLoading(false);
    }
  }, [frete]);

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
                    <p>{loading ? (<div className="flex justify-center"><Loading size={20}/></div>): (<p>{formatPrice(frete)}</p>)}</p>
                    <p>{formatPrice(totalAmount)}</p>
                </div>
            </div>
            <div>
                <ShippingFrete/>
            </div>
            <div className="mx-5 mt-5 gap-2">
                <div className="mb-2"><ButtonLink href='/purchase/payment'>Finalizar compra</ButtonLink></div>
                <div><ButtonLink href='/'>Continuar compra</ButtonLink></div>
            </div>
        </div>
    )
}