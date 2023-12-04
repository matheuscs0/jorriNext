'use client'
import { createContext, useContext, ReactNode, Dispatch, SetStateAction, useState } from 'react';

interface Purchase {
    namePerson: string,
    cpf: string,
    itemName: string[],
    itemPrice: number[],
    itemId: number[],
    totalAmount: number,
    cep: string,
    address: string,
    city: string,
    state: string,
    number: string,
    complemento: string,
    purchaseId: string
    email: string | null | undefined
}

interface PurchaseContextProps {
  purchaseData: Purchase | null;
  setPurchase: Dispatch<SetStateAction<Purchase | null>>;
}

const PurchaseContext = createContext<PurchaseContextProps | undefined>(undefined);

interface PurchaseProviderProps {
  children: ReactNode;
}

export const PurchaseProvider: React.FC<PurchaseProviderProps> = ({ children }) => {
  const [purchaseData, setPurchaseData] = useState<Purchase | null>(null);

  const setPurchase: PurchaseContextProps['setPurchase'] = (data) => {
    setPurchaseData(data);
  };

  const value: PurchaseContextProps = { purchaseData, setPurchase };

  return (
    <PurchaseContext.Provider value={value}>
      {children}
    </PurchaseContext.Provider>
  );
};

export const usePurchaseContext = (): PurchaseContextProps => {
  const context = useContext(PurchaseContext);

  if (!context) {
    throw new Error('usePurchaseContext deve ser utilizado dentro de um PurchaseProvider');
  }

  return context;
};

