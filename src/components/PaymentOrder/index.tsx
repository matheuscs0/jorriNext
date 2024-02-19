import { useCart } from "@/contexts/CartProvider"
import { formatPrice } from '../../hooks/formatPrice/formatPrice';
import { Button } from "../Buttons/DefaultButton";
import { PaymentMethodsOrder } from "@/hooks/PaymentOrders";
import { usePaymentContext } from "@/contexts/PaymentMethodContext";

export const PaymentOrder = () => {

    const {cartItems, deleteProduct, totalAmount, frete, SubTotalAmount, discount} = useCart()
    const {PaymentCardCredit} = PaymentMethodsOrder()
    const { selectedMethod } = usePaymentContext();

    const handleSubmit = async () => {
        switch (selectedMethod) {
          case "card":
            await PaymentCardCredit();
            break;
          default:
            // Tratar o método desconhecido, se necessário
            break;
        }
      };

    return(
        <>
            <div className={`w-[400px] h-[635px] flex flex-col bg-zinc-100 rounded-md shadow-md`}>
                <div className="w-full p-3 border-b"><h1 className="font-bold text-xl">Produtos</h1></div>
                <div className="overflow-y-scroll w-full h-80 p-3 border-b">
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
                <div className="w-full border-b p-3">
                    <div className="w-full flex justify-around">
                        <div className="w-1/2 flex flex-col gap-3">
                            <p>Subtotal</p>
                            <p>Desconto</p>
                            <p>Entrega</p>
                        </div>
                        <div className="flex flex-col gap-3">
                            <p className="font-bold">{formatPrice(SubTotalAmount)}</p>
                            <p className="font-bold">{discount}%</p>
                            <p className="font-bold">{formatPrice(frete)}</p>
                        </div>
                    </div>
                </div>
                <div className="w-full p-3">
                    <div className="w-full flex justify-around">
                        <div className="w-1/2 flex ">
                            <p className="font-bold text-xl">Total</p>
                        </div>
                        <div>
                            <p className="font-bold">{formatPrice(totalAmount)}</p>
                        </div>
                    </div>
                    <div className="mt-8 flex"><Button bg="bg-black" colorText="text-white" onClick={handleSubmit}>Comprar</Button></div>
                </div>
            </div>
        </>
    )
}