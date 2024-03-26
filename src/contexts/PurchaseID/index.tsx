import { createContext, useContext, useState, ReactNode } from "react";

type PurchaseData = {
  id: string;
};

type PurchaseContextType = {
  purchaseID: string | null;
  setPurchaseID: (purchase: PurchaseData) => void;
};

const PurchaseContext = createContext<PurchaseContextType | undefined>(
  undefined
);

export const usePurchaseID = () => {
  const context = useContext(PurchaseContext);
  if (!context) {
    throw new Error(
      "usePurchaseID deve ser usado dentro de um PurchaseProvider"
    );
  }
  return context;
};

export const PurchaseProviderID: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [purchaseID, setPurchaseID] = useState<string | null>(null);

  const updatePurchaseID = (purchase: PurchaseData) => {
    setPurchaseID(purchase.id);
  };

  return (
    <PurchaseContext.Provider value={{ purchaseID, setPurchaseID: updatePurchaseID }}>
      {children}
    </PurchaseContext.Provider>
  );
};

