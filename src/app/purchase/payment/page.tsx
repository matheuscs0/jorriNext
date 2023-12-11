'use client'
import { PaymentMethods } from "@/components/PaymentMethods";
import { PaymentOrder } from "@/components/PaymentOrder";
import { SearchCep } from "@/components/searchCep";
import { useCardFormContext } from "@/contexts/CardFormContext";

export default function PaymentPage() {
    return(
        <div className={`w-full flex justify-around items-center ${window.innerWidth < 650 ? 'flex-col mt-[1000px]' : ''}`}>
            <div className={`gap-2 flex-col justify-center`}>
                <div className="w-full flex justify-center mb-5">
                    <SearchCep/>
                </div>
                <div  className="w-full flex justify-center mb-5">
                    <PaymentMethods/>
                </div>
            </div>
            <div className={`flex justify-center`}>
                <PaymentOrder/>
            </div>
        </div>
    )
}