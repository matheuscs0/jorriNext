// purchaseIDContext.tsx

import React, { ReactNode, createContext, useContext, useState } from 'react';

interface PurchaseIDContextProps {
  newPurchaseID: string | null;
  setNewPurchaseID: React.Dispatch<React.SetStateAction<string | null>>;
}

const PurchaseIDContext = createContext<PurchaseIDContextProps>({
  newPurchaseID: null,
  setNewPurchaseID: () => {},
});

type Children = {
  children: ReactNode
}

export const usePurchaseIDContext = () => useContext(PurchaseIDContext);

export const PurchaseIDProvider = ({ children }: Children) => {
  const [newPurchaseID, setNewPurchaseID] = useState<string | null>(null);

  return (
    <PurchaseIDContext.Provider value={{ newPurchaseID, setNewPurchaseID }}>
      {children}
    </PurchaseIDContext.Provider>
  );
};

