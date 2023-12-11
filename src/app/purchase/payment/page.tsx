'use client'
import { useEffect, useState } from 'react';
import { PaymentMethods } from "@/components/PaymentMethods";
import { PaymentOrder } from "@/components/PaymentOrder";
import { SearchCep } from "@/components/searchCep";
import { useCardFormContext } from "@/contexts/CardFormContext";

export default function PaymentPage() {
    return (
        <div className='w-full flex flex-col justify-around mt-[1000px] items-center sm:flex-row sm:mt-0 lg:flex xl:flex md:flex 2xl:flex'>
            <div className={`gap-2 flex-col justify-center sm:flex-row sm:w-full`}>
                <div className="w-full flex justify-center mb-5">
                    <SearchCep />
                </div>
                <div className="w-full flex justify-center mb-5">
                    <PaymentMethods />
                </div>
            </div>
            <div className={`flex justify-center`}>
                <PaymentOrder />
            </div>
        </div>
    );
}
