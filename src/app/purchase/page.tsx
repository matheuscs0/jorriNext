'use client'
import { TableTotal } from "@/components/TableTotal";
import { Table } from "../Table";
import { ShippingFrete } from "@/components/shippingFrete";
import { TableTotalMobile } from "@/components/TableTotal/TableTotalMobile";

export default function PurchasePage() {

    return (
        <section className="w-full mt-24 h-full flex gap-20  flex-col">
            <div className={`w-full gap-20 flex justify-center ${window.innerWidth < 750 ? 'flex-col' : ''}`}>
                <div className={`${window.innerWidth < 750 ? 'hidden' : 'flex'}`}>
                    <Table.Root>
                        <Table.Header/>
                        <Table.Body/>
                    </Table.Root>

                    <TableTotal/>
                </div>
            
                <div className={`${window.innerWidth < 750 ? 'flex' : 'hidden'}`}>
                    <TableTotalMobile/>
                </div>
            </div>
        </section>
    )
}
