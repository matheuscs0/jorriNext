import { useCart } from "@/contexts/CartProvider"
import { formatPrice } from '../../hooks/formatPrice/formatPrice';
import { Button } from "../Buttons/DefaultButton";
import { PaymentMethodsOrder } from "@/hooks/PaymentOrders";
import { usePaymentContext } from "@/contexts/PaymentMethodContext";

export const PaymentOrder = () => {

    const {cartItems, deleteProduct, totalAmount} = useCart()
    const {PaymentCardCredit, PaymentPixCredit, PaymentBoletoCredit} = PaymentMethodsOrder()
    const { selectedMethod } = usePaymentContext();

    const handleSubmit = async () => {
        switch (selectedMethod) {
          case "card":
            await PaymentCardCredit();
            break;
          case "Pix":
            await PaymentPixCredit();
            break;
          case "Boleto":
            await PaymentBoletoCredit();
            break;
          default:
            // Tratar o método desconhecido, se necessário
            break;
        }
      };

    return(
        <>
            <div className="w-[470px] h-[635px] flex flex-col bg-zinc-100 rounded-md shadow-md">
                <div className="w-full p-3 border-b"><h1 className="font-bold text-xl">Produtos</h1></div>
                <div className="overflow-y-scroll w-full h-80 p-3 border-b">
                {cartItems.map((product) => (
                    <div key={product.id} className="w-full flex justify-around mt-10">
                        <div className="flex justify-center items-center">
                            <img src={`http://localhost:3002${product.poster_path || null}`}  alt="" className="w-[105px] h-[85px] object-cover rounded-xl shadow-md"/>
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
                            <p className="font-bold">{formatPrice(totalAmount)}</p>
                            <p className="font-bold">R$0,00</p>
                            <p className="font-bold">R$0,00</p>
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