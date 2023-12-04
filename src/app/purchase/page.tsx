'use client'
import { TableTotal } from "@/components/TableTotal";
import { Table } from "../Table";

export default function PurchasePage() {

    return (
        <section className="w-full mt-24 h-full flex gap-20 justify-center">
            <Table.Root>
                <Table.Header/>
                <Table.Body/>
            </Table.Root>
            
            <TableTotal/>
        </section>
    )
}
