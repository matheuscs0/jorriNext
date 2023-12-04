'use client'
import { PaymentMethods } from "@/components/PaymentMethods";
import { PaymentOrder } from "@/components/PaymentOrder";
import { SearchCep } from "@/components/searchCep";
import { useCardFormContext } from "@/contexts/CardFormContext";

export default function PaymentPage() {
    return(
        <section className="w-full m-10 flex justify-around items-start">
            <div className="flex flex-col gap-10 w-1/2 justify-center">
                <SearchCep/>
                <PaymentMethods/>
            </div>
            <div className="w-1/2 flex justify-center">
                <PaymentOrder/>
            </div>
        </section>
    )
}