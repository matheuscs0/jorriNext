import { useEffect, useState } from 'react';
import { TableTotal } from "@/components/TableTotal";
import { Table } from "../Table";
import { ShippingFrete } from "@/components/shippingFrete";
import { TableTotalMobile } from "@/components/TableTotal/TableTotalMobile";

export default function PurchasePage() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Verificar o tamanho da janela no lado do cliente
        const handleResize = () => {
            setIsMobile(window.innerWidth < 750);
        };

        // Adicionar o ouvinte de redimensionamento
        window.addEventListener('resize', handleResize);

        // Chamar handleResize inicialmente para definir o estado inicial
        handleResize();

        // Remover o ouvinte de redimensionamento ao desmontar o componente
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Executar apenas uma vez durante a montagem do componente

    return (
        <section className="w-full mt-24 h-full flex gap-20  flex-col">
            <div className={`w-full gap-20 flex justify-center ${isMobile ? 'flex-col' : ''}`}>
                <div className={`${isMobile ? 'hidden' : 'flex'}`}>
                    <Table.Root>
                        <Table.Header/>
                        <Table.Body/>
                    </Table.Root>

                    <TableTotal/>
                </div>
            
                <div className={`${isMobile ? 'flex' : 'hidden'}`}>
                    <TableTotalMobile/>
                </div>
            </div>
        </section>
    );
}
