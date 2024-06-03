'use client'
import { useSession } from "next-auth/react";
import emailjs from "@emailjs/browser";
import { useEffect, useState } from "react";
import { consultApiCheckout } from "../ConsultOrder";
import { useCart } from "@/contexts/CartProvider";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";

export const useSendEmail = () => {
  const { totalAmount, frete } = useCart();
  const { cepFormData } = useFormContext();
  const { data: session } = useSession();
  const [items, setItems] = useState({
    ItemName: '',
    Quantity: 0,
    ItemPrice: 0,
    Name: '',
    Email: '',
    Rua: '',
    City: '',
    State: '',
    Cep: '',
    Numero: '',
    Complemento: ''
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await consultApiCheckout();
        const orderId = res.orders[0].id;
        try {
          const resOrder = await axios.post(`https://mongodb-jorri-next-production.up.railway.app/consultApiOrder/${orderId}`);
          const customer = resOrder.data.customer;
          const item = resOrder.data.items[0];
          const shipping = resOrder.data.shipping.address;

          setItems({
            ItemName: item.name,
            Quantity: item.quantity,
            ItemPrice: item.unit_amount,
            Name: customer.name,
            Email: customer.email,
            Rua: shipping.street,
            City: shipping.locality,
            State: shipping.region_code,
            Cep: shipping.postal_code,
            Numero: shipping.number,
            Complemento: shipping.complement
          });
        } catch (error) {
          console.error("Erro ao buscar detalhes do pedido:", error);
        }
      } catch (error) {
        console.error("Erro ao tentar se tornar um produtor:", error);
      }
    };
    fetchData();
  }, []);

  const sendEmail = () => {
    if (!items.Email) return;

    const email = items.Email || session?.user?.email || "";
    const total = (items.ItemPrice);
    console.log(total)

    const message = `
      Id: ${items.ItemName}.
      Produtos: ${items.ItemName}. 
      Preço: ${items.ItemPrice}.
      Total: ${total} já com frete.
      Endereço: ${items.Rua}, ${items.City}, ${items.State}, Número: ${items.Numero}, Complemento: ${items.Complemento}, ${items.Cep}.
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
        console.log("Email enviado", res);
      }).catch((error) => {
        console.error("Erro ao enviar email:", error);
      });
  };

  return { sendEmail, items };
};