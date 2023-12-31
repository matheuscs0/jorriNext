'use client'
import { ButtonLink } from "@/components/Buttons/ButtonLink";
import { useCart } from "@/contexts/CartProvider";
import { usePurchaseContext } from "@/contexts/PurchaseContext";
import { FaCheckCircle } from "react-icons/fa";

export default function SucessPage() {
    const { purchaseData } = usePurchaseContext();
    const {barcode,qrCode} = useCart()
    console.log(purchaseData)
    return(
        <div className="w-full h-full flex mt-10 flex-col">
            <div className="w-full  m-30 bg-zinc-100 rounded-md shadow-md">
                <div className="flex justify-center w-full border-b pb-10 mt-10">
                    <div className="text-green-700 flex flex-col justify-center items-center">
                        <FaCheckCircle size={200}/>
                        <h1 className="mt-3 font-bold text-xl">Compra confirmada!!</h1>
                    </div>
                </div>
                <div className="w-full justify-center items-center flex mt-10 flex-col border-b pb-10">
                    <h1 className="text-2xl flex ">Olá <span className="font-bold"> {purchaseData?.namePerson}</span>, sua compra foi confirmada</h1>
                    <p>ID DA COMPRA: {purchaseData?.purchaseId}</p>
                    <p>{barcode}</p>
                    <img src={qrCode} alt="" />
                    <p className="w-1/2 mt-10 text-xl text-center">
                    Parabéns! Sua compra foi confirmada com sucesso. Agradecemos por escolher nossos produtos. Seu suporte significa o mundo para nós.
Estamos empolgados para entregar a você uma experiência excepcional. Acompanhe o status de sua compra e, se precisar de qualquer assistência, nossa equipe está pronta para ajudar.

Lembre-se, sua satisfação é nossa prioridade número um. Desejamos que aproveite ao máximo o que adquiriu.

Obrigado novamente por confiar em nós!

Atenciosamente,
Jorri Joias
                    </p>
                </div>
                <div className="w-full flex justify-center items-center mt-10">
                    <div className="w-36">
                        <ButtonLink href='/'>Voltar</ButtonLink>
                    </div>
                </div>
            </div>
        </div>
    )
}