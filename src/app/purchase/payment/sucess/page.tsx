"use client";
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { Loading } from "@/components/Loading";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import nookies from "nookies";
import { consultApiOrder } from "@/hooks/ConsultOrder";
import { useCardFormContext } from "@/contexts/CardFormContext";
import { useFormContext } from "@/contexts/formContext";
import { useCart } from "@/contexts/CartProvider";
import { useSession } from "next-auth/react";

export default function SucessPage() {
  const [loading, setLoading] = useState(false);
  const idOrder = nookies.get(null, "purchaseId")["purchaseId"];
  const { cartItems, totalAmount } = useCart();
  const { cardFormData } = useCardFormContext();
  const { cepFormData } = useFormContext();
  const { data: session } = useSession();

  const email = session?.user?.email;
  const itemName = cartItems.map((item) => item.name);
  const itemPrice = cartItems.map((item) => item.price);
  const itemId = cartItems.map((item) => item.id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await consultApiOrder();
        setLoading(true);
        console.log(res);
        if (res.status === "PAY") {
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
                  purchaseId: idOrder,
                  status: res.status,
                },
              ],
            }
          );
          console.log("Redirecionando para o sucesso");
        }
      } catch (error) {
        console.error("Erro ao tentar se tornar um produtor:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="w-full h-full flex mt-10 flex-col">
          <div className="w-full m-30 bg-zinc-100 rounded-md shadow-md">
            <div className="flex justify-center w-full border-b pb-10 mt-10">
              <div className="text-green-700 flex flex-col justify-center items-center">
                <FaCheckCircle size={200} />
                <h1 className="mt-3 font-bold text-xl">Compra confirmada!!</h1>
              </div>
            </div>
            <div className="w-full justify-center items-center flex mt-10 flex-col border-b pb-10">
              <h1 className="text-2xl flex ">
                Olá <span className="font-bold"> </span>, sua compra foi
                confirmada
              </h1>
              <p>ID DA COMPRA: {idOrder}</p>
              <p className="w-1/2 mt-10 text-xl text-center">
                Parabéns! Sua compra foi confirmada com sucesso. Agradecemos por
                escolher nossos produtos. Seu suporte significa o mundo para
                nós. Estamos empolgados para entregar a você uma experiência
                excepcional. Acompanhe o status de sua compra e, se precisar de
                qualquer assistência, nossa equipe está pronta para ajudar.
                Lembre-se, sua satisfação é nossa prioridade número um.
                Desejamos que aproveite ao máximo o que adquiriu. Obrigado
                novamente por confiar em nós! Atenciosamente, Jorri Joias
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-10">
              <div className="w-36">
                <ButtonLink href="/">Voltar</ButtonLink>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="w-full flex justify-center items-center mt-36">
          <div className="w-full flex justify-center items-center flex-col">
            <Loading />
          </div>
        </div>
      )}
    </>
  );
}
