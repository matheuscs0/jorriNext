import { useState } from "react";
import { Button } from "../Buttons/DefaultButton";
import { useCardFormContext } from "@/contexts/CardFormContext";
import { PixForm } from "../PixForm";
import { BoletoForm } from "../BoletoForm";
import { CardForm } from "../CardForm";
import { usePaymentContext } from "@/contexts/PaymentMethodContext";

export const PaymentMethods = () => {
  const [open, setOpen] = useState(true);
  const { selectedMethod, setPaymentMethod } = usePaymentContext(); // Default to card
  const { cardFormData, setCardFormData } = useCardFormContext();

  const handleInputChange = (key: keyof typeof cardFormData, value: string) => {
    setCardFormData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    console.log(cardFormData);
    // Perform submission logic based on the selectedMethod
  };

  const renderPaymentForm = () => {
    switch (selectedMethod) {
      case "card":
        return <CardForm/>;
      case "Pix":
        return <PixForm />;
      case "Boleto":
        return <BoletoForm/>;
      default:
        return null;
    }
  };

  const paymentMethods = ["card", "Pix", "Boleto"];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className={`${window.innerWidth < 650 ? 'w-[400px]' : 'w-[750px]'}  ${open ? "" : "h-28"} flex flex-col bg-zinc-100 rounded-md shadow-md duration-500 transition-all`}
    >
      <div className="w-full border-b p-3">
        <h1 className=" font-bold text-xl">Método de pagamento</h1>
      </div>
      <div className={`${open ? "flex" : "hidden"}`}>
        <div className="flex flex-wrap w-full justify-center items-center gap-5 p-3">
          <div className="w-full flex flex-col gap-2">
            <div>
              <label className="font-bold text-md mr-3">Método de Pagamento</label>
              <select
                value={selectedMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className="bg-zinc-100 border rounded"
              >
                {paymentMethods.map((method) => (
                  <option key={method} value={method} className="bg-zinc-100">
                    {method === "card" ? "Cartão de Crédito" : method}
                  </option>
                ))}
              </select>
            </div>
            {renderPaymentForm()}
          </div>
          <div className="w-96">
            <Button
              bg="bg-black"
              colorText="text-white"
              type="submit"
              onClick={() => setOpen(false)}
            >
              Salvar
            </Button>
          </div>
        </div>
      </div>
      <div className={`w-full ${open ? "hidden" : "flex"} justify-center items-center mt-4`}>
        <button className="bg-black text-white w-80 h-8 rounded-md shadow-md" onClick={() => setOpen(true)}>
          Voltar
        </button>
      </div>
    </form>
  );
};

export default PaymentMethods;
