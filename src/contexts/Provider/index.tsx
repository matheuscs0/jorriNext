'use client'
import {SessionProvider} from 'next-auth/react'
import { ReactNode } from 'react';
import { CartProvider } from '@/contexts/CartProvider'
import { SideProvider } from "@/contexts/SideBarContext";
import { SearchProvider } from "@/contexts/SearchContext";
import { SizeProvider } from '@/contexts/SizeContext';

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
                            {children}
                        </SizeProvider>
                    </SearchProvider>
                </SideProvider>
            </CartProvider>
        </SessionProvider>
    )
}

export default Provider