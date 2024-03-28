
'use client'
import { useSession } from "next-auth/react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { consultApiOrder } from "../ConsultOrder";
import { useCart } from "@/contexts/CartProvider";
import { useFormContext } from "@/contexts/formContext";

export const SendEmailConst = () => {
  const { totalAmount, frete } = useCart();
  const { cepFormData } = useFormContext();
  const { data: session } = useSession();
  const [items, setItems] = useState({
      ItemName: '',
      Quantity: '',
      ItemPrice: '',
      Name: ''
  });

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await consultApiOrder(); // Chame a função consultApiOrder aqui
              // Verifica se os dados retornados incluem uma lista de itens
              if (res && res.items && res.customer) {
                  setItems({
                      ItemName: res.items.name,
                      Quantity: res.items.quantity,
                      ItemPrice: res.items.unit_amount,
                      Name: res.customer.name
                  });
              }
          } catch (error) {
              console.error("Erro ao tentar se tornar um produtor:", error);
          }
      };
      fetchData();
  }, []);

  const email = session?.user?.email;

  function SendEmail() {
      const message = `
       Id: ${items.ItemName}.
       Produtos: ${items.ItemName}. 
       Preço: ${items.ItemPrice}.
       Total: ${totalAmount} ja com o frete no valor de ${frete}.
       Endereço: ${cepFormData.address}, ${cepFormData.city}, ${cepFormData.state}, Número: ${cepFormData.number}, Complemento: ${cepFormData.complemento}, ${cepFormData.cep}.
       `;
      const templateParams = {
          from_name: items.Name,
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
  };
};
