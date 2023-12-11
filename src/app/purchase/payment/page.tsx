'use client'
import { useEffect, useState } from 'react';
import { PaymentMethods } from "@/components/PaymentMethods";
import { PaymentOrder } from "@/components/PaymentOrder";
import { SearchCep } from "@/components/searchCep";
import { useCardFormContext } from "@/contexts/CardFormContext";

export default function PaymentPage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 650);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className={`w-full flex justify-around items-center ${isMobile ? 'flex-col mt-[1000px]' : ''}`}>
            <div className={`gap-2 flex-col justify-center`}>
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
