'use client'
import { useCardFormContext } from "@/contexts/CardFormContext";
import { useCart } from "@/contexts/CartProvider";
import { usePurchaseContext } from "@/contexts/PurchaseContext";
import { useFormContext } from "@/contexts/formContext";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { SendEmailConst } from "../SendEmail";

export const PaymentMethodsOrder = () => {
    const {push} = useRouter();
    const { setPurchase } = usePurchaseContext();
    const {cartItems, totalAmount, setBarcode, setQrCode} = useCart()
    const { cardFormData } = useCardFormContext();
    const { cepFormData } = useFormContext();
    const {data: session} = useSession();
    const {SendEmail} = SendEmailConst()

    const email = session?.user?.email
    const itemName = cartItems.map((item) => item.name);
    const itemPrice = cartItems.map((item) => item.price);
    const itemId = cartItems.map((item) => item.id);
    const totalWithoutSymbols = totalAmount.toString().replace(/[.,]/g, "");

    const PaymentCardCredit = async () => {
      try {
          const res = await axios.post("http://localhost:3003/PaymentCreditCard", {
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
              
              // Atualizar o estado local antes de chamar a API
              setPurchase({
                  cep: cepFormData.cep,
                  address: cepFormData.address,
                  city: cepFormData.city,
                  state: cepFormData.state,
                  number: cepFormData.number,
                  complemento: cepFormData.complemento,
                  cpf: cardFormData.cpf,
                  itemName: cartItems.map((item) => item.name),
                  itemPrice: cartItems.map((item) => item.price),
                  itemId: cartItems.map((item) => item.id),
                  namePerson: cardFormData.cardName,
                  purchaseId,
                  totalAmount,
                  email: session?.user?.email
              });
              
              await new Promise(resolve => setTimeout(resolve, 0));
              SendEmail()
              // Chamar a API
              await axios.post("http://localhost:3003/api/addPurchase", {
                  purchase: [{
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
                          purchaseId: purchaseId
                      }]
                  }
              );
  
              push(`/purchase/payment/sucess/credit-card/${purchaseId}`);
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
        const res = await axios.post("http://localhost:3003/PaymentPix", {
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
        console.log(res.data)
        const purchaseId = res.data.id;
        const barcode = res.data.qrCodeText
        const qrCode = res.data.qrCodeLinks
        setBarcode(barcode)
        setQrCode(qrCode)

        if (purchaseId && purchaseId.length > 0) {
            console.log("Redirecionando para o sucesso");
            
            // Atualizar o estado local antes de chamar a API
            setPurchase({
                cep: cepFormData.cep,
                address: cepFormData.address,
                city: cepFormData.city,
                state: cepFormData.state,
                number: cepFormData.number,
                complemento: cepFormData.complemento,
                cpf: cardFormData.cpf,
                itemName: cartItems.map((item) => item.name),
                itemPrice: cartItems.map((item) => item.price),
                itemId: cartItems.map((item) => item.id),
                namePerson: cardFormData.cardName,
                purchaseId,
                totalAmount,
                email: session?.user?.email
            });

            // Aguarde a atualização do estado antes de continuar
            await new Promise(resolve => setTimeout(resolve, 0));

            // Agora faça a chamada para axios.post("http://localhost:3003/api/updateUser"...)
            await axios.post("http://localhost:3003/api/addPurchase", {
                purchase: [{
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
                        price: totalWithoutSymbols,
                        date: new Date(),
                        purchaseId: purchaseId
                    }]
                }
            );

            push(`/purchase/payment/sucess/pix/${purchaseId}`);
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
      const res = await axios.post("http://localhost:3003/PaymentBoleto", {
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
      console.log(res.data)
      const purchaseId = res.data.id;
      const barcode = res.data.boleto
      const qrCode = res.data.barcode
        setBarcode(barcode)
        setQrCode(qrCode)

      if (purchaseId && purchaseId.length > 0) {
          console.log("Redirecionando para o sucesso");
          
          // Atualizar o estado local antes de chamar a API
          setPurchase({
              cep: cepFormData.cep,
              address: cepFormData.address,
              city: cepFormData.city,
              state: cepFormData.state,
              number: cepFormData.number,
              complemento: cepFormData.complemento,
              cpf: cardFormData.cpf,
              itemName: cartItems.map((item) => item.name),
              itemPrice: cartItems.map((item) => item.price),
              itemId: cartItems.map((item) => item.id),
              namePerson: cardFormData.cardName,
              purchaseId,
              totalAmount,
              email: session?.user?.email
          });

          // Aguarde a atualização do estado antes de continuar
          await new Promise(resolve => setTimeout(resolve, 0));

          // Agora faça a chamada para axios.post("http://localhost:3003/api/updateUser"...)
          await axios.post("http://localhost:3003/api/addPurchase", {
              purchase: [{
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
                      purchaseId: purchaseId
                  }]
              }
          );

          push(`/purchase/payment/sucess/boleto/${purchaseId}`);
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