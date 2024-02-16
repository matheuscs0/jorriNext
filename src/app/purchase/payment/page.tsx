"use client";
import { PaymentOrder } from "@/components/PaymentOrder";
import { SearchCep } from "@/components/searchCep";

export default function PaymentPage() {
  return (
    <section className="w-full h-full mt-20">
        <div className="w-full h-full flex-col justify-center items-center gap-5 sm:flex md:flex">
            <div className="flex ml-5 sm:ml-0 md:ml-0"><SearchCep /></div>
            <div className="flex"><PaymentOrder /></div>
        </div>
    </section>
  );
}
