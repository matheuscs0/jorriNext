import { useCart } from "@/contexts/CartProvider";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";
import { ChangeEvent, FormEvent } from "react";
import { Input } from "../Input";
import { CiSearch } from "react-icons/ci";

export const ShippingFrete = () => {
    const { cepFormData, setCepFormData } = useFormContext();
    const {cartItems, setFrete, setDeliveryTime} = useCart()
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
          console.error('Erro ao buscar CEP:', error);
        }
      }
  
    
      const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(cepFormData);
      };

    return(
        <form onSubmit={handleSubmit} className="w-full mt-5">
            <div className="w-full p-2 border-b border-t">
                Prazo de entrega
            </div>
            <div className="flex gap-2 justify-center w-full mt-5">
                <Input
                    label="CEP"
                    placeholder="CEP"
                    type="text"
                    autoComplete="cep"
                    onChange={handleCepChange}
                />
                <button type="button" onClick={shippingFrete} className="bg-black/90 text-white mt-5 p-1 text-2xl rounded-md"><CiSearch /></button>
              </div>
        </form>
    )
}