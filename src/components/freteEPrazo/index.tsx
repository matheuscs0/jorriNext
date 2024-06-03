import { useCart } from "@/contexts/CartProvider";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";
import { ChangeEvent } from "react";
import { Input } from "../Input";
import { FaShippingFast } from "react-icons/fa";
import { formatPrice } from "@/hooks/formatPrice/formatPrice";
import toast from "react-hot-toast";
import { toastConfig } from "@/app/helper/toast/toastConfig";

export const FretePrazo = () => {
    const { cepFormData, setCepFormData } = useFormContext();
    const {cartItems, setFrete, setDeliveryTime, frete, deliveryTime} = useCart()
    const itemPrice = cartItems.map((item) => item.price);
    const itemId = cartItems.map((item) => item.id);

    const handleCepChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newCep = event.target.value;
        setCepFormData((prevData) => ({ ...prevData, cep: newCep }));
      };

    const shippingFrete = async () => {
        try{
          const res = await axios.post('https://mongodb-jorri-next-production.up.railway.app/calculateFrete', {
            cep: cepFormData.cep,
            itemId,
            itemPrice
          });
          const { data } = res;
          const shippingFrete = data.freteOptions[1].price
          const deliveryTime = data.freteOptions[1].deliveryTime
          setDeliveryTime(deliveryTime)
          setFrete(shippingFrete)
        } catch (error) {
            toast.error("Erro ao buscar CEP, verifique os campos", toastConfig);
        }
      }

    return (
        <div className="flex justify-center flex-col">
        <div className="flex justify-between items-center gap-2">
            <div className="flex items-center text-left gap-2 justify-center">
                <FaShippingFast size={40}/>
                <h1 className="flex text-left text-[14px]">Calcular frete e prazo</h1>
            </div>
            <div className="flex items-center gap-2">
                <Input
                    label=""
                    placeholder="CEP"
                    type="text"
                    autoComplete="cep"
                    onChange={handleCepChange}
                />
                <button onClick={shippingFrete}
                className="p-2 bg-black text-white  rounded-md shadow-md">OK</button>
            </div>
        </div>
        <div className="mt-2">
            {frete ? (
                <div className="flex flex-col justify-center">
                    <div className="flex justify-between items-center bg-black/10 rounded-md p-2">
                        <div className="flex flex-col text-left">
                            <h1 className="text-lg font-bold">Frete fixo</h1>
                            <p className="text-md">até {deliveryTime} dias úteis</p>
                        </div>
                        <div>
                            <p className="flex text-md font-bold">{formatPrice(frete)}</p>
                        </div>
                    </div>
                </div>
            ) : (<></>)}
        </div>
        </div>
    )
}