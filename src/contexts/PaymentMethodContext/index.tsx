import React, { createContext, useContext, useState, ReactNode } from 'react';

interface PaymentContextProps {
  selectedMethod: string;
  setPaymentMethod: (method: string) => void;
}

const PaymentContext = createContext<PaymentContextProps | undefined>(undefined);

export const usePaymentContext = () => {
  const context = useContext(PaymentContext);
  if (!context) {
    throw new Error('usePaymentContext must be used within a PaymentProvider');
  }
  return context;
};

interface PaymentProviderProps {
  children: ReactNode;
}

export const PaymentMethodProvider = ({ children }: PaymentProviderProps) => {
  const [selectedMethod, setSelectedMethod] = useState('card');

  const setPaymentMethod = (method: string) => {
    setSelectedMethod(method);
  };

  const contextValue: PaymentContextProps = { selectedMethod, setPaymentMethod };

  return (
    <PaymentContext.Provider value={contextValue}>
      {children}
    </PaymentContext.Provider>
  );
};
