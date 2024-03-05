"use client";
import { useCardFormContext } from "@/contexts/CardFormContext";
import { useCart } from "@/contexts/CartProvider";
import { usePurchaseContext } from "@/contexts/PurchaseContext";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";
import { useSession } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { SendEmailConst } from "../SendEmail";
import { useEffect, useState } from "react";

export const PaymentMethodsOrder = () => {
  const router = useRouter();
  const { setPurchase } = usePurchaseContext();
  const { cartItems, totalAmount } = useCart();
  const { cardFormData } = useCardFormContext();
  const { cepFormData } = useFormContext();
  const { data: session } = useSession();
  const { SendEmail } = SendEmailConst();

  const email = session?.user?.email;
  const itemName = cartItems.map((item) => item.name);
  const itemPrice = cartItems.map((item) => item.price);
  const itemId = cartItems.map((item) => item.id);
  const totalWithoutSymbols = totalAmount.toString().replace(/[.,]/g, "");

  const PaymentCardCredit = async () => {
    try {
      const res = await axios.post(
        "https://mongodb-jorri-next-production.up.railway.app/PaymentCreditCard",
        {
          namePerson: cardFormData.cardName,
          email,
          cpf: cardFormData.cpf,
          itemName,
          itemPrice,
          itemId,
          totalAmount,
          cep: cepFormData.cep,
          address: cepFormData.address,
          city: cepFormData.city,
          state: cepFormData.state,
          number: cepFormData.number,
          complemento: cepFormData.complemento,
        }
      );
      const response = res.data;
      const purchaseId = res.data.id;
      const href_for_pay = res.data.href_for_pay;
      const status = res.data.status;
      console.log("resssss", response);

      if (status === "ACTIVE") {
        router.push(`${href_for_pay}`);
      } else if (status === "PAY") {
        console.log("Redirecionando para o sucesso");
        await new Promise((resolve) => setTimeout(resolve, 0));

        SendEmail();

        
        await axios.post(
          "https://mongodb-jorri-next-production.up.railway.app/api/addPurchase",
          {
            purchase: [
              {
                product: itemName,
                itemId: itemId,
                email,
                cep: cepFormData.cep,
                address: cepFormData.address,
                city: cepFormData.city,
                state: cepFormData.state,
                number: cepFormData.number,
                complemento: cepFormData.complemento,
                cpf: cardFormData.cpf,
                price: totalAmount,
                date: new Date(),
                purchaseId: purchaseId,
              },
            ],
          }
        );
      }
    } catch (error) {
      console.error("Erro no pagamento:", error);
      alert("Pagamento recusado");
    }
  };

  return {
    PaymentCardCredit,
  };
};
