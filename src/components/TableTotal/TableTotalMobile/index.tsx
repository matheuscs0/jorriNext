import { useCart } from "@/contexts/CartProvider";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import { useEffect, useState } from "react";
import { ShippingFrete } from "@/components/shippingFrete";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Loading } from "@/components/Loading";

export const TableTotalMobile = () => {
    const { totalAmount, SubTotalAmount, frete } = useCart();
    const {cartItems, deleteProduct} = useCart()

    const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (frete) {
      setLoading(false);
    }
  }, [frete]);

    return(
        <div className="w-[400px] flex flex-col bg-zinc-100 rounded-md shadow-md">
            <div className="w-full justify-center flex mt-5"><h1 className="text-xl font-bold">Resumo</h1></div>
            <div className="overflow-y-scroll w-full h-56 p-3 border-b">
                {cartItems.map((product) => (
                    <div key={product.id} className="w-full flex justify-around mt-10">
                        <div className="flex justify-center items-center">
                            <img src={`https://mongodb-jorri-next-production.up.railway.app/imagens/${product.poster_path || null}`}  alt="" className="w-[105px] h-[85px] object-cover rounded-xl shadow-md"/>
                        </div>
                        <div className="w-1/2 flex justify-center items-center">
                            <div className="w-[150px] flex flex-col">
                                <p className="text-md font-bold">
                                    {product.name}
                                </p>
                                <p className="text-sm">
                                   cod: {product.id}
                                </p>
                                <button className="font-bold text-left" onClick={() => deleteProduct(product)}>
                                    X Remover
                                </button>
                            </div>
                            <div>
                                <h1 className="font-bold">{formatPrice(product.price)}</h1>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            <div className="w-full flex justify-around mt-10">
                <div className="w-1/2 flex flex-col gap-3">
                    <p>Subtotal</p>
                    <p>Entrega</p>
                    <p>Total</p>
                </div>
                <div className="flex flex-col gap-3">
                    <p>{formatPrice(SubTotalAmount)}</p>
                    <p>{loading ? (<div className="flex justify-center"><Loading/></div>): (<p>{formatPrice(frete)}</p>)}</p>
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