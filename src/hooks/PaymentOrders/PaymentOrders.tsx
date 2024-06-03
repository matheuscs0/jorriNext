"use client";
import { useCardFormContext } from "@/contexts/CardFormContext";
import { useCart } from "@/contexts/CartProvider";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SendEmailConst } from "../SendEmail";
import { usePurchaseContext } from "@/contexts/PurchaseContext";
import nookies from 'nookies'
import toast from "react-hot-toast";
import { toastConfig } from "@/app/helper/toast/toastConfig";

export const PaymentMethodsOrder = () => {
  const router = useRouter();
  const { cartItems, totalAmount } = useCart();
  const { cardFormData } = useCardFormContext();
  const { cepFormData } = useFormContext();
  const { data: session } = useSession();
  const { setPurchase } = usePurchaseContext();

  const email = session?.user?.email;
  const itemName = cartItems.map((item) => item.name);
  const itemPrice = cartItems.map((item) => item.price);
  const itemId = cartItems.map((item) => item.id);

  const formatAmount = (amount: any) => {
    // Multiplicar por 100 e arredondar para obter o valor em centavos
    return Math.round(amount * 100);
  };

  const total = formatAmount(totalAmount)
  console.log('totsl',total)


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
          total,
          cep: cepFormData.cep,
          address: cepFormData.address,
          city: cepFormData.city,
          state: cepFormData.state,
          number: cepFormData.number,
          complemento: cepFormData.complemento,
        }
      );

      const purchaseId = res.data.id;
      nookies.set({ res }, "purchaseId", `${purchaseId}`);
      toast.success("Redirecionando para o pagamento...", toastConfig);
      const href_for_pay = res.data.href_for_pay;
      const status = res.data.status;
      if (status === "ACTIVE") {
        setTimeout(() => {
          router.push(href_for_pay);
        }, 500);
      }
      return res.data;
    } catch (error) {
      toast.error("Erro ao realizar pagamento, verifique os campos", toastConfig);
    }
  };

  return {
    PaymentCardCredit,
  };
};
