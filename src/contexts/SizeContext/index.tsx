'use client'
import { SizeType } from '@/app/products/[id]/page';
import { createContext, useContext, ReactNode, useState } from 'react';

interface SizeContextType {
  selectedSize: SizeType | null;
  setContextSize: (size: SizeType | null) => void;
}

interface SizeProviderProps {
  children: ReactNode;
}

const SizeContext = createContext<SizeContextType>({} as SizeContextType);

export function SizeProvider({ children }: SizeProviderProps) {
  const [selectedSize, setSelectedSize] = useState<SizeType | null>(null);

  const setContextSize = (size: SizeType | null) => {
    setSelectedSize(size);
  };

  return (
    <SizeContext.Provider value={{ selectedSize, setContextSize }}>
      {children}
    </SizeContext.Provider>
  );
}

export function useSize() {
  return useContext(SizeContext);
}


