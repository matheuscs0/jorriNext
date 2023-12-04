'use client'
import { useCardFormContext } from "@/contexts/CardFormContext";
import { useCart } from "@/contexts/CartProvider";
import { usePurchaseContext } from "@/contexts/PurchaseContext";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const PaymentMethodsOrder = () => {
    const {push} = useRouter();
    const { setPurchase } = usePurchaseContext();
    const {cartItems, totalAmount} = useCart()
    const { cardFormData } = useCardFormContext();
    const { cepFormData } = useFormContext();
    const {data: session} = useSession();

    const email = session?.user?.email
    const itemName = cartItems.map((item) => item.name);
    const itemPrice = cartItems.map((item) => item.price);
    const itemId = cartItems.map((item) => item.id);

  const PaymentCardCredit = async () => {
    try {
      const res = await axios.post("http://localhost:3003/PaymentCreditCard",{
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
        cardNumber: cardFormData.cardNumber,
        cardName: cardFormData.cardName,
        cvv: cardFormData.cardCVV,
        exp_month: cardFormData.cardExpiryMonth,
        exp_year: cardFormData.cardExpiryYear
      });
      const purchaseId = res.data.id;
      console.log('purchaseId', purchaseId)

      if (purchaseId && purchaseId.length > 0) {
        console.log("Redirecionando para o sucesso");
        setPurchase({
          cep: cepFormData.cep,
          address: cepFormData.address,
          city: cepFormData.city,
          state: cepFormData.state,
          number: cepFormData.number, 
          complemento: cepFormData.complemento,
          cpf: cardFormData.cpf,
          itemName,
          itemPrice,
          itemId,
          namePerson: cardFormData.cardName,
          purchaseId,
          totalAmount,
          email: session?.user?.email
        });
        await axios.post("http://localhost:3003/api/updateUser", {
                user: {
                    email,
                    purchases: [{
                        product: itemName,
                        itemId: itemId,
                        cep: cepFormData.cep,
                        address: cepFormData.address,
                        city: cepFormData.city,
                        state: cepFormData.state,
                        number: cepFormData.number, 
                        complemento: cepFormData.complemento,
                        cpf: cardFormData.cpf,
                        price: totalAmount,
                        date: new Date(),
                        purchaseId: purchaseId
                    }]
                }
            });
        push(`/purchase/payment/sucess/${purchaseId}`);
      } else {
        console.error("ID da compra inválido:", purchaseId);
        alert("Pagamento recusado, verifique todos os campos");
      }
    } catch (error) {
      console.error("Erro no pagamento:", error);
      alert("Pagamento recusado");
    }
  };

  const PaymentPixCredit = async () => {
    try {
      const res = await axios.post("http://localhost:3003/PaymentPix",{
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
      });
      const purchaseId = res.data.id;
      console.log('purchaseId', purchaseId)

      if (purchaseId && purchaseId.length > 0) {
        console.log("Redirecionando para o sucesso");
        setPurchase({
          cep: cepFormData.cep,
          address: cepFormData.address,
          city: cepFormData.city,
          state: cepFormData.state,
          number: cepFormData.number, 
          complemento: cepFormData.complemento,
          cpf: cardFormData.cpf,
          itemName,
          itemPrice,
          itemId,
          namePerson: cardFormData.cardName,
          purchaseId,
          totalAmount,
          email: session?.user?.email
        });
        await axios.post("http://localhost:3003/api/updateUser", {
                user: {
                    email,
                    purchases: [{
                        product: itemName,
                        itemId: itemId,
                        cep: cepFormData.cep,
                        address: cepFormData.address,
                        city: cepFormData.city,
                        state: cepFormData.state,
                        number: cepFormData.number, 
                        complemento: cepFormData.complemento,
                        cpf: cardFormData.cpf,
                        price: totalAmount,
                        date: new Date(),
                        purchaseId: purchaseId
                    }]
                }
            });
        push(`/purchase/payment/sucess/${purchaseId}`);
      } else {
        console.error("ID da compra inválido:", purchaseId);
        alert("Pagamento recusado, verifique todos os campos");
      }
    } catch (error) {
      console.error("Erro no pagamento:", error);
      alert("Pagamento recusado");
    }
  };

  const PaymentBoletoCredit = async () => {
    try {
      const res = await axios.post("http://localhost:3003/PaymentBoleto",{
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
      });
      const purchaseId = res.data.id;
      console.log('purchaseId', purchaseId)

      if (purchaseId && purchaseId.length > 0) {
        console.log("Redirecionando para o sucesso");
        setPurchase({
          cep: cepFormData.cep,
          address: cepFormData.address,
          city: cepFormData.city,
          state: cepFormData.state,
          number: cepFormData.number, 
          complemento: cepFormData.complemento,
          cpf: cardFormData.cpf,
          itemName,
          itemPrice,
          itemId,
          namePerson: cardFormData.cardName,
          purchaseId,
          totalAmount,
          email: session?.user?.email
        });
        await axios.post("http://localhost:3003/api/updateUser", {
                user: {
                    email,
                    purchases: [{
                        product: itemName,
                        itemId: itemId,
                        cep: cepFormData.cep,
                        address: cepFormData.address,
                        city: cepFormData.city,
                        state: cepFormData.state,
                        number: cepFormData.number, 
                        complemento: cepFormData.complemento,
                        cpf: cardFormData.cpf,
                        price: totalAmount,
                        date: new Date(),
                        purchaseId: purchaseId
                    }]
                }
            });
        push(`/purchase/payment/sucess/${purchaseId}`);
      } else {
        console.error("ID da compra inválido:", purchaseId);
        alert("Pagamento recusado, verifique todos os campos");
      }
    } catch (error) {
      console.error("Erro no pagamento:", error);
      alert("Pagamento recusado");
    }
  };

  return {
    PaymentCardCredit,
    PaymentPixCredit,
    PaymentBoletoCredit
  };
};