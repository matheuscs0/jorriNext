
'use client'
import { useSession } from "next-auth/react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { consultApiOrder } from "../ConsultOrder";
import { useCart } from "@/contexts/CartProvider";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";
import { formatPrice } from "../formatPrice/formatPrice";

export const SendEmailConst = () => {
  const { totalAmount, frete } = useCart();
  const { cepFormData } = useFormContext();
  const token = process.env.NEXT_PUBLIC_BEARER_TOKEN;
  const { data: session } = useSession();
  const [items, setItems] = useState({
      ItemName: '',
      Quantity: 0,
      ItemPrice: 0,
      Name: '',
      Email: ''
  });
  const res = consultApiOrder()
  console.log(res)

  useEffect(() => {
      const fetchData = async () => {
          try {
              const res = await consultApiOrder(); // Chame a função consultApiOrder aqui
              const order = res.orders[0].id;
              try {
                 const resOrder = await axios.get(
                  `https://sandbox.api.pagseguro.com/orders/${order}`,
                  {
                    headers: {
                      Accept: "application/json",
                      Authorization: `Bearer ${token}`,
                    },
                  }
                );
                console.log(resOrder.data.items)
                if (resOrder && resOrder.data.items && resOrder.data.customer) {
                    const customer = resOrder.data.customer;
                    const items = resOrder.data.items[0];
                    setItems({
                        ItemName: items.name,
                        Quantity: items.quantity,
                        ItemPrice: items.unit_amount,
                        Name: customer.name,
                        Email: customer.email
                    });
                }
              } catch (error) {}
          } catch (error) {
              console.error("Erro ao tentar se tornar um produtor:", error);
          }
      };
      fetchData();
  }, []);

  const email = items.Email || session?.user?.email || "";
  console.log(items)
  const total = formatPrice(items.ItemPrice);

  function SendEmail() {
      const message = `
       Id: ${items.ItemName}.
       Produtos: ${items.ItemName}. 
       Preço: ${items.ItemPrice}.
       Total: ${total} ja com o frete no valor de ${frete}.
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
          ).then((res) => {
            console.log("EMail enviado", res)
          })
  }

  return {
      SendEmail
  };
};
