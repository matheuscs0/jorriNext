'use client'
import {SessionProvider, useSession} from 'next-auth/react'
import { ReactNode, useEffect } from 'react';
import { CartProvider } from '@/contexts/CartProvider'
import { SideProvider } from "@/contexts/SideBarContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { SizeProvider } from '@/contexts/SizeContext';
import { CepFormProvider } from '../formContext';
import { CardFormProvider } from '../CardFormContext';
import { PurchaseProvider } from '../PurchaseContext';
import { PaymentMethodProvider } from '../PaymentMethodContext';
import { ProductsProvider } from '../ProductsContext';
import { IdProvider } from '../PurchaseID';

type ProviderProps = {
    children: ReactNode
}

const Provider = ({children}: ProviderProps) =>{
    return(
        <SessionProvider>
            <CartProvider>
                <SideProvider>
                    <SearchProvider>
                        <SizeProvider>
                            <CepFormProvider>
                                <CardFormProvider>
                                    <PurchaseProvider>
                                        <PaymentMethodProvider>
                                            <ProductsProvider>
                                                <IdProvider>
                                            {children}
                                            </IdProvider>
                                            </ProductsProvider>
                                        </PaymentMethodProvider>
                                    </PurchaseProvider>
                                </CardFormProvider>
                            </CepFormProvider>
                        </SizeProvider>
                    </SearchProvider>
                </SideProvider>
            </CartProvider>
        </SessionProvider>
    )
}

export default Provider