'use client'
import { PaymentOrder } from "@/components/PaymentOrder";
import { SearchCep } from "@/components/searchCep";

export default function PaymentPage() {
    return (
        <div className='w-full flex-col justify-center items-center gap-10 mt-20 xs:flex sm:flex md:flex lg:flex xl:flex'>
                <SearchCep />
                <PaymentOrder />
        </div>
    );
}
