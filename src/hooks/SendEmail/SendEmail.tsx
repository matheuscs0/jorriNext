import { useCardFormContext } from "@/contexts/CardFormContext";
import { useCart } from "@/contexts/CartProvider";
import { useFormContext } from "@/contexts/formContext";
import { useSession } from "next-auth/react";
import emailjs from "@emailjs/browser";

export const SendEmailConst = () => {
    const {cartItems, totalAmount, frete} = useCart()
    const { cardFormData } = useCardFormContext();
    const { cepFormData } = useFormContext();
    const {data: session} = useSession();

    const email = session?.user?.email
    const itemName = cartItems.map((item) => item.name);
    const itemPrice = cartItems.map((item) => item.price);
    const itemId = cartItems.map((item) => item.id);

    function SendEmail(){  
        const message = `
         Id: ${itemId}.
         Produtos: ${itemName}. 
         Preço: ${itemPrice}.
         Total: ${totalAmount} ja com o frete no valor de ${frete}.
         Endereço: ${cepFormData.address}, ${cepFormData.city}, ${cepFormData.state}, Número: ${cepFormData.number}, Complemento: ${cepFormData.complemento}, ${cepFormData.cep}.
         `;
        const templateParams = {
          from_name: cardFormData.cardName,
          message: message,
          email: email,
        };
        emailjs
          .send(
            "service_5gqygbm",
            "template_o4xviem",
            templateParams,
            "whjzz6VfAbbzUVi53"
          )
    }
          return {
            SendEmail
          }
    };
