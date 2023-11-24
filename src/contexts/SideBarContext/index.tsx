'use client'
import { SideBarContextType } from '@/types/SideBarContextType';
import { ReactNode, createContext, useContext, useState } from 'react';

type SideContextProps = {
    children: ReactNode;
}

const SideContext = createContext<SideBarContextType>({} as SideBarContextType);

export function SideProvider({children}: SideContextProps) {
    const [sideOpen, setSideOpen] = useState(false)
    const [sideSearchOpen, setSideSearchOpen] = useState(false)

    return(
        <SideContext.Provider value={{sideOpen, setSideOpen, sideSearchOpen, setSideSearchOpen}}>
            {children}
        </SideContext.Provider>
    )
}

export function useSideBar(){
    return useContext(SideContext)
}