'use client'
import { useEffect, useState } from 'react';
import { TableTotal } from "@/components/TableTotal";
import { Table } from "../Table";
import { TableTotalMobile } from "@/components/TableTotal/TableTotalMobile";

export default function PurchasePage() {
    return (
        <section className="w-full mt-24 h-full flex gap-20  flex-col">
            <div className={`w-full gap-20 flex-col justify-center sm:flex-row lg:flex xl:flex md:flex-row 2xl:flex`}>
            <div className="hidden gap-10 sm:flex md:flex lg:flex xl:flex 2xl:flex">
                <div>
                <Table.Root>
                    <Table.Header />
                    <Table.Body />
                 </Table.Root>
                </div>
                 <div>
                    <TableTotal />
                 </div>
            </div>

            
                <div className={`flex w-full justify-center sm:hidden md:hidden lg:hidden`}>
                    <TableTotalMobile/>
                </div>
            </div>
        </section>
    );
}

