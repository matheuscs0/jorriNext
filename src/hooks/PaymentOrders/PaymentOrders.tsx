"use client";
import { useCardFormContext } from "@/contexts/CardFormContext";
import { useCart } from "@/contexts/CartProvider";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SendEmailConst } from "../SendEmail";
import { usePurchaseContext } from "@/contexts/PurchaseContext";

export const PaymentMethodsOrder = () => {
  const router = useRouter();
  const { cartItems, totalAmount } = useCart();
  const { cardFormData } = useCardFormContext();
  const { cepFormData } = useFormContext();
  const { data: session } = useSession();
  const { SendEmail } = SendEmailConst();
  const { setPurchase, purchaseData } = usePurchaseContext();

  const email = session?.user?.email;
  const itemName = cartItems.map((item) => item.name);
  const itemPrice = cartItems.map((item) => item.price);
  const itemId = cartItems.map((item) => item.id);

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

      const purchaseId = res.data.id;
    if (purchaseId) {
      setPurchase(prevPurchase => ({
        ...prevPurchase,
        idOrder: purchaseId,
        namePerson: prevPurchase?.namePerson || '', // Defina um valor padrão para namePerson
        cpf: prevPurchase?.cpf || '', // Defina um valor padrão para cpf
        itemName: prevPurchase?.itemName || [], // Defina um valor padrão para itemName
        itemPrice: prevPurchase?.itemPrice || [], // Defina um valor padrão para itemPrice
        itemId: prevPurchase?.itemId || [], // Defina um valor padrão para itemId
        totalAmount: prevPurchase?.totalAmount || 0, // Defina um valor padrão para totalAmount
        cep: prevPurchase?.cep || '', // Defina um valor padrão para cep
        address: prevPurchase?.address || '', // Defina um valor padrão para address
        city: prevPurchase?.city || '', // Defina um valor padrão para city
        state: prevPurchase?.state || '', // Defina um valor padrão para state
        number: prevPurchase?.number || '', // Defina um valor padrão para number
        complemento: prevPurchase?.complemento || '', // Defina um valor padrão para complemento
        email: prevPurchase?.email || null, // Defina um valor padrão para email
      }));
      console.log('id api', purchaseId);
      // Restante do código...
    } else {
      console.error("ID de compra não está definido na resposta da API");
      // Trate a situação de ID de compra não definido conforme necessário
    }
      const href_for_pay = res.data.href_for_pay;
      const status = res.data.status;

      if (status === "ACTIVE") {
        setTimeout(() => {
          router.push(href_for_pay);
        }, 500);
      } else if (status === "PAY") {
        try {
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
          console.log("Redirecionando para o sucesso");
           SendEmail();
        } catch (error) {
          console.error("Erro no pagamento:", error);
          alert("Pagamento recusado, por favor preencha todos os campos.");
        }
      }
    } catch (error) {
      console.error("Erro ao processar pagamento:", error);
      alert("Erro ao processar pagamento. Por favor, tente novamente mais tarde.");
    }
  };

  return {
    PaymentCardCredit,
  };
};
